function throughput(){
    var jmlDataBps=parseFloat(document.getElementById("jmlDataBps").value);
    var waktuPengiriman=parseFloat(document.getElementById("waktuPengiriman").value);
    var hasil = jmlDataBps/waktuPengiriman;
    document.getElementById("hasilThroughput").value=hasil;
    if (parseInt(hasil) <= 25){
        document.getElementById("indeksThroughput").value=4;
    }
    else if (parseInt(hasil) <= 50){
        document.getElementById("indeksThroughput").value=3;
    }
    else if (parseInt(hasil) <= 75){
        document.getElementById("indeksThroughput").value=2;
    }
    else if (parseInt(hasil) <= 100){
        document.getElementById("indeksThroughput").value=1;
    }
}
function delay(){
    var totalDelay=parseFloat(document.getElementById("totalDelay").value);
    var paketDiterima=parseFloat(document.getElementById("paketDiterima").value);
    var dly=totalDelay/paketDiterima;
    var hasil=dly * 1000;
    document.getElementById("hasilDelay").value=hasil;
    if (parseInt(hasil) < 150){
        document.getElementById("indeksDelay").value=4;
    }
    else if (parseInt(hasil) < 300){
        document.getElementById("indeksDelay").value=3;
    }
    else if (parseInt(hasil) < 450){
        document.getElementById("indeksDelay").value=2;
    }
    else if (parseInt(hasil) >= 450){
        document.getElementById("indeksDelay").value=1;
    }
}
function packetLoss(){
    var paketDikirim=parseFloat(document.getElementById("paketDikirim").value);
    var paketDiterima=parseFloat(document.getElementById("paketTerima").value);
    var paketHilang=paketDikirim-paketDiterima;
    var hasil=(paketHilang/paketDikirim*(100);
    document.getElementById("hasilPacketLoss").value=parseInt(hasil);
    if (parseInt(hasil) == 0 ){
        document.getElementById("indeksPacketLoss").value=4;
    }
    else if (parseInt(hasil) < 3){
        document.getElementById("indeksPacketLoss").value=3;
    }
    else if (parseInt(hasil) < 15){
        document.getElementById("indeksPacketLoss").value=2;
    }
    else if (parseInt(hasil) >= 25){
        document.getElementById("indeksPacketLoss").value=1;
    }
}
function jitter(){
    var totalVariasi=parseFloat(document.getElementById("variasiDelay").value);
    var paketDiterima=parseFloat(document.getElementById("terimaPaket").value);
    hasil=totalVariasi/(paketDiterima-1);
    document.getElementById("hasilJitter").value=hasil;
    if (parseInt(hasil) == 0){
        document.getElementById("indeksJitter").value=4;
    }
    else if (parseInt(hasil) < 75){
        document.getElementById("indeksJitter").value=3;
    }
    else if (parseInt(hasil) < 125){
        document.getElementById("indeksJitter").value=2;
    }
    else if (parseInt(hasil)  >= 125){
        document.getElementById("indeksJitter").value=1;
    }
    
}
