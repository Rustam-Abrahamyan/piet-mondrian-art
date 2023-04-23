var colors = ["red", "blue", "yellow"],
    minRowCols = 4,
    maxRowCols = 6,
    recursionChance = 0.2,
    recursionDepreciationRate = 0.05,
    styleChance = 0.3;
function generateMondrianTable(e, r, t) {
    var o = Math.floor(Math.random() * (r + 1 - e) + e),
        n = Math.floor(Math.random() * (r + 1 - e) + e),
        l = document.createElement("table");
    l.setAttribute("border", 0),
        l.setAttribute("cellpadding", 0),
        l.setAttribute("cellspacing", 0);
    for (var a = 0; a < o; a++) {
        var d = document.createElement("tr");
        l.appendChild(d);
    }
    a = 0;
    for (var c = l.querySelectorAll("tr").length; a < c; a++)
        for (var i = 0; i < n; i++) {
            var u = document.createElement("td");
            l.querySelectorAll("tr")[a].appendChild(u);
        }
    for (a = 0, c = l.querySelectorAll("td").length; a < c; a++) {
        if (Math.random() < t) {
            var h = generateMondrianTable(1, 3, t * recursionDepreciationRate);
            l.querySelectorAll("td")[a].appendChild(h),
                (l.querySelectorAll("td")[a].style.border = "none");
        }
    }
    return l;
}
function getCellBackgroundColor() {
    return Math.random() < styleChance
        ? colors[Math.floor(Math.random() * (colors.length + 1))]
        : "white";
}
function MondrianArt() {
    var e = document.getElementById("root"),
        r = generateMondrianTable(minRowCols, maxRowCols, recursionChance);
    (e.innerHTML = ""), e.appendChild(r);
    for (var t = 0, o = e.querySelectorAll("td").length; t < o; t++)
        e.querySelectorAll("td")[t].style.backgroundColor =
            getCellBackgroundColor();
}
MondrianArt(),
    document
        .getElementById("generate")
        .addEventListener("click", MondrianArt, !1);
