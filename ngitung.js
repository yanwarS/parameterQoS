function throughput(){
    var jmlDataBps=parseFloat(document.getElementById("jmlDataBps").value);
    var waktuPengiriman=parseFloat(document.getElementById("waktuPengiriman").value);
    var throughput1=jmlDataBps/waktuPengiriman;
    var hasil=throughput1/200;
    document.getElementById("hasilThroughput").value=hasil;
    if (hasil <= 25){
        document.getElementById("indeksThroughput").value=4;
    }
    else if (hasil <= 50){
        document.getElementById("indeksThroughput").value=3;
    }
    else if (hasil <= 75){
        document.getElementById("indeksThroughput").value=2;
    }
    else if (hasil <= 100){
        document.getElementById("indeksThroughput").value=1;
    }
}
function delay(){
    var totalDelay=parseFloat(document.getElementById("totalDelay").value);
    var paketDiterima=parseFloat(document.getElementById("paketDiterima").value);
    var hasil=totalDelay/paketDiterima;
    document.getElementById("hasilDelay").value=hasil;
    if (hasil < 150){
        document.getElementById("indeksPacketLoss").value=4;
    }
    else if (hasil < 300){
        document.getElementById("indeksPacketLoss").value=3;
    }
    else if (hasil < 450){
        document.getElementById("indeksPacketLoss").value=2;
    }
    else if (hasil >= 450){
        document.getElementById("indeksPacketLoss").value=1;
    }
}
function packetLoss(){
    var paketDikirim=parseFloat(document.getElementById("paketDikirim").value);
    var paketDiterima=parseFloat(document.getElementById("paketTerima").value);
    var paketHilang=paketDikirim-paketDiterima;
    var hasil=(paketHilang/paketDikirim)*(100);
    document.getElementById("hasilPacketLoss").value=hasil;
    if (hasil =0 ){
        document.getElementById("indeksDelay").value=4;
    }
    else if (hasil <3){
        document.getElementById("indeksDelay").value=3;
    }
    else if (hasil <15){
        document.getElementById("indeksDelay").value=2;
    }
    else if (hasil >= 25){
        document.getElementById("indeksDelay").value=1;
    }
}
function jitter(){
    var totalVariasi=parseFloat(document.getElementById("variasiDelay").value);
    var paketDiterima=parseFloat(document.getElementById("terimaPaket").value);
    hasil=totalVariasi/(paketDiterima-1);
    document.getElementById("hasilJitter").value=hasil;
    if (hasil = 0){
        document.getElementById("indeksJitter").value=4;
    }
    else if (hasil < 75){
        document.getElementById("indeksJitter").value=3;
    }
    else if (hasil < 125){
        document.getElementById("indeksJitter").value=2;
    }
    else if (hasil >= 125){
        document.getElementById("indeksJitter").value=1;
    }
    
}
