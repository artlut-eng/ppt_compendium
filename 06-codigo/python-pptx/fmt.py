"""
Formatacao numerica pt-BR para slides (01-fundamentos/formatacao-numerica.md).

    fmt_number(1234567.8)        -> '1.234.568'
    fmt_number(3.14159, 2)       -> '3,14'
    fmt_currency(1234567)        -> 'R$ 1,2 mi'
    fmt_currency(68600)          -> 'R$ 68,6 mil'
    fmt_currency(950, scale=None)-> 'R$ 950'
    fmt_pct(0.0431, 1, ratio=True) -> '4,3%'
    fmt_pct(76.2, 0)             -> '76%'
    fmt_pp(1.8)                  -> '+1,8 p.p.'
    fmt_delta(41.3, 42.1, kind='pct') -> '-1,9%'
    fmt_ratio(54, 71)            -> '54 de 71 (76%)'
"""
from __future__ import annotations

from typing import Literal


def _sep(s: str) -> str:
    """Troca separadores en-US -> pt-BR."""
    return s.replace(",", "\x00").replace(".", ",").replace("\x00", ".")


def fmt_number(v: float | int | None, decimals: int = 0, sign: bool = False) -> str:
    if v is None:
        return "-"
    s = f"{v:+,.{decimals}f}" if sign else f"{v:,.{decimals}f}"
    return _sep(s)


def fmt_currency(v: float | int | None, currency: str = "R$", scale: Literal["auto", "mil", "mi", "bi"] | None = "auto", decimals: int | None = None) -> str:
    if v is None:
        return "-"
    neg = v < 0
    a = abs(v)
    if scale == "auto":
        scale = "bi" if a >= 1e9 else "mi" if a >= 1e6 else "mil" if a >= 1e4 else None
    div = {"bi": 1e9, "mi": 1e6, "mil": 1e3, None: 1}[scale]
    x = a / div
    if decimals is None:
        decimals = 0 if scale is None else (1 if x < 100 else 0)
    s = f"{currency} {fmt_number(x, decimals)}" + (f" {scale}" if scale else "")
    return f"({s})" if neg else s


def fmt_pct(v: float | None, decimals: int = 1, ratio: bool = False, sign: bool = False) -> str:
    if v is None:
        return "-"
    x = v * 100 if ratio else v
    return fmt_number(x, decimals, sign) + "%"


def fmt_pp(v: float | None, decimals: int = 1) -> str:
    if v is None:
        return "-"
    return fmt_number(v, decimals, sign=True) + " p.p."


def fmt_delta(actual: float, reference: float, kind: Literal["pct", "abs", "pp"] = "pct", decimals: int = 1, unit: str = "") -> str:
    """Variacao de actual em relacao a reference."""
    if kind == "pct":
        if reference == 0:
            return "n/a"
        return fmt_pct((actual - reference) / abs(reference), decimals, ratio=True, sign=True)
    if kind == "pp":
        return fmt_pp(actual - reference, decimals)
    return fmt_number(actual - reference, decimals, sign=True) + (f" {unit}" if unit else "")


def fmt_ratio(part: int, total: int, decimals: int = 0) -> str:
    """'54 de 71 (76%)' - obrigatorio quando a base e pequena."""
    if not total:
        return f"{part} de 0"
    return f"{fmt_number(part)} de {fmt_number(total)} ({fmt_pct(100 * part / total, decimals)})"


def fmt_days(v: float | None, decimals: int = 1) -> str:
    return "-" if v is None else f"{fmt_number(v, decimals)} d"


def auto(v, kind: str | None = None) -> str:
    """Formatacao automatica para valores numericos em KPIs: kind = currency | pct | ratio | int | None."""
    if isinstance(v, str) or v is None:
        return v if v is not None else "-"
    if kind == "currency":
        return fmt_currency(v)
    if kind == "pct":
        return fmt_pct(v, 1 if abs(v) < 10 else 0)
    if kind == "int":
        return fmt_number(v, 0)
    if isinstance(v, int) or float(v).is_integer():
        return fmt_number(v, 0)
    return fmt_number(v, 1 if abs(v) < 100 else 0)
