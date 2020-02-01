function downloadAsCanvas() {
    domtoimage.toBlob(document.querySelector(".main")).then(blob => {
            saveAs(blob, "cover" + new Date().getTime() + ".png");
    });
}
$(()=> {
    [".text-title", ".text-name"].forEach(q => {
            $(q).click(() => {
                $(q).text(prompt("Content for " + q) || $(q).first().text());
            })
        }
    );
});