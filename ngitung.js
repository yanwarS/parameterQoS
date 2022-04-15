function throughput(){
    var 
    jmlDataBps=parseFloat(document.getElementById("jmlDataBps").value);
    var waktuPengiriman=parseFloat(document.getElementById("waktuPengiriman").value);
    var hasil=jmlDataBps/waktuPengiriman;
    document.getElementById("hasilThroughput").value=hasil;
}
function delay(){
    var totalDelay=parseFloat(document.getElementById("totalDelay").value);
    var paketDiterima=parseFloat(document.getElementById("paketDiterima").value);
    var hasil=totalDelay/paketDiterima;
    document.getElementById("hasildelay").value=hasil;
}
function packetLoss(){
    var paketDikirim=parseFloat(document.getElementById("paketDikirim").value);
    var paketDiterima=parseFloat(document.getElementById("paketTerima").value);
    var paketHilang=paketDikirim/paketDiterima;
    var hasil=(paketHilang/paketDikirim)*(100);
    document.getElementById("hasilPacketLoss").value=hasil;
}
function jitter(){
    var totalVariasi=parseFloat(document.getElementById("variasiDelay").value);
    var paketDiterima=parseFloat(document.getElementById("terimaPaket").value);
    hasil=totalVariasi/(paketDiterima-1);
    document.getElementById("hasilJitter").value=hasil;
}