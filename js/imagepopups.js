$(document).ready(function() {

///////////////////////////////////////
//FINLAND
//////////////////////////////////////
    
//Finland Image popups
    $('#rovaniemiloc').click(function() {
        $('#rovaniemiimg').fadeIn(500);
        $('#rovaniemiicon').fadeIn(500);
    });    
    $('#kakslauttanenloc').click(function() {
        $('#kakslauttanenimg').fadeIn(500);
        $('#kakslauttanenicon').fadeIn(500);
    });
    $('#dogsleddingloc').click(function() {
        $('#dogsleddingimg').fadeIn(500);
        $('#dogsleddingicon').fadeIn(500);
    }); 
    $('#icebreakerloc').click(function() {
        $('#icebreakerimg').fadeIn(500);
        $('#icebreakericon').fadeIn(500);
    });    
    $('#nuuksioloc').click(function() {
        $('#nuuksioimg').fadeIn(500);
        $('#nuuksioicon').fadeIn(500);
    });
    $('#katajanokkaloc').click(function() {
        $('#katajanokkaimg').fadeIn(500);
        $('#katajanokkaicon').fadeIn(500);
    }); 
    $('#korouomaloc').click(function() {
        $('#korouomaimg').fadeIn(500);
        $('#korouomaicon').fadeIn(500);
    });
    $('#alpokoivumakiloc').click(function() {
        $('#alpokoivumakiimg').fadeIn(500);
        $('#alpokoivumakiicon').fadeIn(500);
    });
    $('#kummakiviloc').click(function() {
        $('#kummakiviimg').fadeIn(500);
        $('#kummakiviicon').fadeIn(500);
    });
    $('#treriksrosetloc').click(function() {
        $('#treriksrosetimg').fadeIn(500);
        $('#treriksroseticon').fadeIn(500);
    });
    
// Return to Finland    
    $("#finland").click(function() {
        $('#rovaniemiimg').fadeOut(500);
        $('#kakslauttanenimg').fadeOut(500);
        $("#dogsleddingimg").fadeOut(500);
        $("#icebreakerimg").fadeOut(500);
        $("#nuuksioimg").fadeOut(500);
        $("#katajanokkaimg").fadeOut(500);
        $("#korouomaimg").fadeOut(500);
        $("#alpokoivumakiimg").fadeOut(500);
        $("#kummakiviimg").fadeOut(500);
        $("#treriksrosetimg").fadeOut(500);
        $('#rovaniemiicon').fadeOut(500);
        $('#kakslauttanenicon').fadeOut(500);
        $("#dogsleddingicon").fadeOut(500);
        $("#icebreakericon").fadeOut(500);
        $("#nuuksioicon").fadeOut(500);
        $("#katajanokkaicon").fadeOut(500);
        $("#korouomaicon").fadeOut(500);
        $("#alpokoivumakiicon").fadeOut(500);
        $("#kummakiviicon").fadeOut(500);
        $("#treriksroseticon").fadeOut(500);
        $("#finland").fadeIn(500);
    });  
    
// Finland Info popups
    $('#rovaniemiicon').click(function() {
        $('#rovaniemiinfo').fadeIn(500);
        $('.infobackground').fadeIn(500);
        $('#rovaniemiicon').fadeOut(500);
        });  
    $('#rovaniemiimg').click(function() {
        $('#rovaniemiinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $('#rovaniemiicon').fadeIn(500);
    });
    $("#finland").click(function() {
        $('#rovaniemiinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $("#finland").fadeIn(500);
    }); 
    
    $('#kakslauttanenicon').click(function() {
        $('#kakslauttaneninfo').fadeIn(500);
        $('.infobackground').fadeIn(500);
        $('#kakslauttanenicon').fadeOut(500);
        });  
    $('#kakslauttanenimg').click(function() {
        $('#kakslauttaneninfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $('#kakslauttanenicon').fadeIn(500);
    });
    $("#finland").click(function() {
        $('#kakslauttaneninfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $("#finland").fadeIn(500);
    }); 
    
    $('#dogsleddingicon').click(function() {
        $('#dogsleddinginfo').fadeIn(500);
        $('.infobackground').fadeIn(500);
        $('#dogsleddingicon').fadeOut(500);
    });  
    $('#dogsleddingimg').click(function() {
        $('#dogsleddinginfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $('#dogsleddingicon').fadeIn(500);
    });
    $("#finland").click(function() {
        $('#dogsleddinginfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $("#finland").fadeIn(500);
    }); 
    
    $('#icebreakericon').click(function() {
        $('#icebreakerinfo').fadeIn(500);
        $('.infobackground').fadeIn(500);
        $('#icebreakericon').fadeOut(500);
    });  
    $('#icebreakerimg').click(function() {
        $('#icebreakerinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $('#icebreakericon').fadeIn(500);
    });
    $("#finland").click(function() {
        $('#icebreakerinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $("#finland").fadeIn(500);
    }); 
    
    $('#nuuksioicon').click(function() {
        $('#nuuksioinfo').fadeIn(500);
        $('.infobackground').fadeIn(500);
        $('#nuuksioicon').fadeOut(500);
    });  
    $('#nuuksioimg').click(function() {
        $('#nuuksioinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $('#nuuksioicon').fadeIn(500);
    });
    $("#finland").click(function() {
        $('#nuuksioinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $("#finland").fadeIn(500);
    }); 
    
    $('#katajanokkaicon').click(function() {
        $('#katajanokkainfo').fadeIn(500);
        $('.infobackground').fadeIn(500);
        $('#katajanokkaicon').fadeOut(500);
    });  
    $('#katajanokkaimg').click(function() {
        $('#katajanokkainfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $('#katajanokkaicon').fadeIn(500);
    });
    $("#finland").click(function() {
        $('#katajanokkainfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $("#finland").fadeIn(500);
    }); 
    
    $('#korouomaicon').click(function() {
        $('#korouomainfo').fadeIn(500);
        $('.infobackground').fadeIn(500);
        $('#korouomaicon').fadeOut(500);
    });  
    $('#korouomaimg').click(function() {
        $('#korouomainfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $('#korouomaicon').fadeIn(500);
    });
    $("#finland").click(function() {
        $('#korouomainfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $("#finland").fadeIn(500);
    });   
    
    $('#alpokoivumakiicon').click(function() {
        $('#alpokoivumakiinfo').fadeIn(500);
        $('.infobackground').fadeIn(500);
        $('#alpokoivumakiicon').fadeOut(500);
    });  
    $('#alpokoivumakiimg').click(function() {
        $('#alpokoivumakiinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $('#alpokoivumakiicon').fadeIn(500);
    });
    $("#finland").click(function() {
        $('#alpokoivumakiinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $("#finland").fadeIn(500);
    });   
    
    $('#kummakiviicon').click(function() {
        $('#kummakiviinfo').fadeIn(500);
        $('.infobackground').fadeIn(500);
        $('#kummakiviicon').fadeOut(500);
    });  
    $('#kummakiviimg').click(function() {
        $('#kummakiviinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $('#kummakiviicon').fadeIn(500);
    });
    $("#finland").click(function() {
        $('#kummakiviinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $("#finland").fadeIn(500);
    });      
    
    $('#treriksroseticon').click(function() {
        $('#treriksrosetinfo').fadeIn(500);
        $('.infobackground').fadeIn(500);
        $('#treriksroseticon').fadeOut(500);
    });  
    $('#treriksrosetimg').click(function() {
        $('#treriksrosetinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $('#treriksroseticon').fadeIn(500);
    });
    $("#finland").click(function() {
        $('#treriksrosetinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $("#finland").fadeIn(500);
    });  

///////////////////////////////////////
//NORWAY
//////////////////////////////////////

//Norway Image popups
    $('#northcapeloc').click(function() {
        $('#northcapeimg').fadeIn(500);
         $('#northcapeicon').fadeIn(500);
    });    
    $('#rostloc').click(function() {
        $('#rostimg').fadeIn(500);
        $('#rosticon').fadeIn(500);
    });
    $('#torghattenloc').click(function() {
        $('#torghattenimg').fadeIn(500);
        $('#torghattenicon').fadeIn(500);
    });    
    $('#trondheimloc').click(function() {
        $('#trondheimimg').fadeIn(500);
        $('#trondheimicon').fadeIn(500);
    });    
    $('#kannesteinenloc').click(function() {
        $('#kannesteinenimg').fadeIn(500);
        $('#kannesteinenicon').fadeIn(500);
    });
    $('#nigardsbreenloc').click(function() {
        $('#nigardsbreenimg').fadeIn(500);
        $('#nigardsbreenicon').fadeIn(500);
    }); 
    $('#trolltungaloc').click(function() {
        $('#trolltungaimg').fadeIn(500);
        $('#trolltungaicon').fadeIn(500);
    });
    $('#atlanticroadloc').click(function() {
        $('#atlanticroadimg').fadeIn(500);
        $('#atlanticroadicon').fadeIn(500);
    });
    $('#aurlandloc').click(function() {
        $('#aurlandimg').fadeIn(500);
        $('#aurlandicon').fadeIn(500);
    });
    $('#minibottleloc').click(function() {
        $('#minibottleimg').fadeIn(500);
        $('#minibottleicon').fadeIn(500);
    });  
    
// Return to map Norway
    $("#norway").click(function() {
        $('#northcapeimg').fadeOut(500);
        $('#rostimg').fadeOut(500);
        $("#torghattenimg").fadeOut(500);
        $("#trondheimimg").fadeOut(500);
        $("#kannesteinenimg").fadeOut(500);
        $("#nigardsbreenimg").fadeOut(500);
        $("#trolltungaimg").fadeOut(500);
        $("#atlanticroadimg").fadeOut(500);
        $("#aurlandimg").fadeOut(500);
        $("#minibottleimg").fadeOut(500);
        $('#northcapeicon').fadeOut(500);
        $('#rosticon').fadeOut(500);
        $("#torghattenicon").fadeOut(500);
        $("#trondheimicon").fadeOut(500);
        $("#kannesteinenicon").fadeOut(500);
        $("#nigardsbreenicon").fadeOut(500);
        $("#trolltungaicon").fadeOut(500);
        $("#atlanticroadicon").fadeOut(500);
        $("#aurlandicon").fadeOut(500);
        $("#minibottleicon").fadeOut(500);
        $("#norway").fadeIn(500);
    });
    
// Norway Info popups
    $('#northcapeicon').click(function() {
        $('#northcapeinfo').fadeIn(500);
        $('.infobackground').fadeIn(500);
        $('#northcapeicon').fadeOut(500);
        });  
    $('#northcapeimg').click(function() {
        $('#northcapeinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $('#northcapeicon').fadeIn(500);
    });
    $("#norway").click(function() {
        $('#northcapeinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $("#norway").fadeIn(500);
    }); 
    
    $('#rosticon').click(function() {
        $('#rostinfo').fadeIn(500);
        $('.infobackground').fadeIn(500);
        $('#rosticon').fadeOut(500);
        });  
    $('#rostimg').click(function() {
        $('#rostinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $('#rosticon').fadeIn(500);
    });
    $("#norway").click(function() {
        $('#rostinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $("#norway").fadeIn(500);
    }); 
    
    $('#torghattenicon').click(function() {
        $('#torghatteninfo').fadeIn(500);
        $('.infobackground').fadeIn(500);
        $('#torghattenicon').fadeOut(500);
    });  
    $('#torghattenimg').click(function() {
        $('#torghatteninfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $('#torghattenicon').fadeIn(500);
    });
    $("#norway").click(function() {
        $('#torghatteninfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $("#norway").fadeIn(500);
    });      
    
    $('#trondheimicon').click(function() {
        $('#trondheiminfo').fadeIn(500);
        $('.infobackground').fadeIn(500);
        $('#trondheimicon').fadeOut(500);
    });  
    $('#trondheimimg').click(function() {
        $('#trondheiminfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $('#trondheimicon').fadeIn(500);
    });
    $("#norway").click(function() {
        $('#trondheiminfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $("#norway").fadeIn(500);
    }); 
    
    $('#kannesteinenicon').click(function() {
        $('#kannesteineninfo').fadeIn(500);
        $('.infobackground').fadeIn(500);
        $('#kannesteinenicon').fadeOut(500);
    });  
    $('#kannesteinenimg').click(function() {
        $('#kannesteineninfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $('#kannesteinenicon').fadeIn(500);
    });
    $("#norway").click(function() {
        $('#kannesteineninfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $("#norway").fadeIn(500);
    }); 
    
    $('#nigardsbreenicon').click(function() {
        $('#nigardsbreeninfo').fadeIn(500);
        $('.infobackground').fadeIn(500);
        $('#nigardsbreenicon').fadeOut(500);
    });  
    $('#nigardsbreenimg').click(function() {
        $('#nigardsbreeninfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $('#nigardsbreenicon').fadeIn(500);
    });
    $("#norway").click(function() {
        $('#nigardsbreeninfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $("#norway").fadeIn(500);
    }); 
    
    $('#trolltungaicon').click(function() {
        $('#trolltungainfo').fadeIn(500);
        $('.infobackground').fadeIn(500);
        $('#trolltungaicon').fadeOut(500);
    });  
    $('#trolltungaimg').click(function() {
        $('#trolltungainfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $('#trolltungaicon').fadeIn(500);
    });
    $("#norway").click(function() {
        $('#trolltungainfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $("#norway").fadeIn(500);
    }); 
    
    $('#atlanticroadicon').click(function() {
        $('#atlanticroadinfo').fadeIn(500);
        $('.infobackground').fadeIn(500);
        $('#atlanticroadicon').fadeOut(500);
    });  
    $('#atlanticroadimg').click(function() {
        $('#atlanticroadinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $('#atlanticroadicon').fadeIn(500);
    });
    $("#norway").click(function() {
        $('#atlanticroadinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $("#norway").fadeIn(500);
    });   
    
    $('#aurlandicon').click(function() {
        $('#aurlandinfo').fadeIn(500);
        $('.infobackground').fadeIn(500);
        $('#aurlandicon').fadeOut(500);
    });  
    $('#aurlandimg').click(function() {
        $('#aurlandinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $('#aurlandicon').fadeIn(500);
    });
    $("#norway").click(function() {
        $('#aurlandinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $("#norway").fadeIn(500);
    });   
    
    $('#minibottleicon').click(function() {
        $('#minibottleinfo').fadeIn(500);
        $('.infobackground').fadeIn(500);
        $('#minibottleicon').fadeOut(500);
    });  
    $('#minibottleimg').click(function() {
        $('#minibottleinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $('#minibottleicon').fadeIn(500);
    });
    $("#norway").click(function() {
        $('#minibottleinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $("#norway").fadeIn(500);
    });      
    
///////////////////////////////////////
//SWEDEN
//////////////////////////////////////    

//Sweden Image popups    
    $('#icehotelloc').click(function() {
        $('#icehotelimg').fadeIn(500);
         $('#icehotelicon').fadeIn(500);
    });    
    $('#fulufjalletloc').click(function() {
        $('#fulufjalletimg').fadeIn(500);
        $('#fulufjalleticon').fadeIn(500);
    });
    $('#storsjonloc').click(function() {
        $('#storsjonimg').fadeIn(500);
        $('#storsjonicon').fadeIn(500);
    });    
    $('#jokkmokkloc').click(function() {
        $('#jokkmokkimg').fadeIn(500);
        $('#jokkmokkicon').fadeIn(500);
    });    
    $('#salaloc').click(function() {
        $('#salaimg').fadeIn(500);
        $('#salaicon').fadeIn(500);
    });
    $('#bastnasloc').click(function() {
        $('#bastnasimg').fadeIn(500);
        $('#bastnasicon').fadeIn(500);
    }); 
    $('#bexellloc').click(function() {
        $('#bexellimg').fadeIn(500);
        $('#bexellicon').fadeIn(500);
    });
    $('#wragardenloc').click(function() {
        $('#wragardenimg').fadeIn(500);
        $('#wragardenicon').fadeIn(500);
    });
    $('#failuresloc').click(function() {
        $('#failuresimg').fadeIn(500);
        $('#failuresicon').fadeIn(500);
    });
    $('#bureplatsenloc').click(function() {
        $('#bureplatsenimg').fadeIn(500);
        $('#bureplatsenicon').fadeIn(500);
    });   
// Return to map Sweden
    $("#sweden").click(function() {
        $('#icehotelimg').fadeOut(500);
        $('#fulufjalletimg').fadeOut(500);
        $("#storsjonimg").fadeOut(500);
        $("#jokkmokkimg").fadeOut(500);
        $("#salaimg").fadeOut(500);
        $("#bastnasimg").fadeOut(500);
        $("#bexellimg").fadeOut(500);
        $("#wragardenimg").fadeOut(500);
        $("#failuresimg").fadeOut(500);
        $("#bureplatsenimg").fadeOut(500);
        $('#icehotelicon').fadeOut(500);
        $('#fulfulufjälleticon').fadeOut(500);
        $("#storsjonicon").fadeOut(500);
        $("#jokkmokkicon").fadeOut(500);
        $("#salaicon").fadeOut(500);
        $("#bastnasicon").fadeOut(500);
        $("#bexellicon").fadeOut(500);
        $("#wragardenicon").fadeOut(500);
        $("#failuresicon").fadeOut(500);
        $("#bureplatsenicon").fadeOut(500);
        $("#sweden").fadeIn(500);
    });    

// Sweden Info popups
    $('#icehotelicon').click(function() {
        $('#icehotelinfo').fadeIn(500);
        $('.infobackground').fadeIn(500);
        $('#icehotelicon').fadeOut(500);
        });  
    $('#icehotelimg').click(function() {
        $('#icehotelinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $('#icehotelicon').fadeIn(500);
    });
    $("#sweden").click(function() {
        $('#icehotelinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $("#sweden").fadeIn(500);
    }); 
    
    $('#fulufjalleticon').click(function() {
        $('#fulufjalletinfo').fadeIn(500);
        $('.infobackground').fadeIn(500);
        $('#fulufjalleticon').fadeOut(500);
        });  
    $('#fulufjalletimg').click(function() {
        $('#fulufjalletinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $('#fulufjalleticon').fadeIn(500);
    });
    $("#sweden").click(function() {
        $('#fulufjalletinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $("#sweden").fadeIn(500);
    }); 
    
    $('#storsjonicon').click(function() {
        $('#storsjoninfo').fadeIn(500);
        $('.infobackground').fadeIn(500);
        $('#storsjonicon').fadeOut(500);
    });  
    $('#storsjonimg').click(function() {
        $('#storsjoninfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $('#storsjonicon').fadeIn(500);
    });
    $("#sweden").click(function() {
        $('#storsjoninfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $("#sweden").fadeIn(500);
    }); 
    
    $('#jokkmokkicon').click(function() {
        $('#jokkmokkinfo').fadeIn(500);
        $('.infobackground').fadeIn(500);
        $('#jokkmokkicon').fadeOut(500);
    });  
    $('#jokkmokkimg').click(function() {
        $('#jokkmokkinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $('#jokkmokkicon').fadeIn(500);
    });
    $("#sweden").click(function() {
        $('#jokkmokkinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $("#sweden").fadeIn(500);
    }); 
    
    $('#salaicon').click(function() {
        $('#salainfo').fadeIn(500);
        $('.infobackground').fadeIn(500);
        $('#salaicon').fadeOut(500);
    });  
    $('#salaimg').click(function() {
        $('#salainfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $('#salaicon').fadeIn(500);
    });
    $("#sweden").click(function() {
        $('#salainfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $("#sweden").fadeIn(500);
    }); 
    
    $('#bastnasicon').click(function() {
        $('#bastnasinfo').fadeIn(500);
        $('.infobackground').fadeIn(500);
        $('#bastnasicon').fadeOut(500);
    });  
    $('#bastnasimg').click(function() {
        $('#bastnasinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $('#bastnasicon').fadeIn(500);
    });
    $("#sweden").click(function() {
        $('#bastnasinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $("#sweden").fadeIn(500);
    }); 
    
    $('#bexellicon').click(function() {
        $('#bexellinfo').fadeIn(500);
        $('.infobackground').fadeIn(500);
        $('#bexellicon').fadeOut(500);
    });  
    $('#bexellimg').click(function() {
        $('#bexellinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $('#bexellicon').fadeIn(500);
    });
    $("#sweden").click(function() {
        $('#bexellinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $("#sweden").fadeIn(500);
    });   
    
    $('#wragardenicon').click(function() {
        $('#wragardeninfo').fadeIn(500);
        $('.infobackground').fadeIn(500);
        $('#wragardenicon').fadeOut(500);
    });  
    $('#wragardenimg').click(function() {
        $('#wragardeninfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $('#wragardenicon').fadeIn(500);
    });
    $("#sweden").click(function() {
        $('#wragardeninfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $("#sweden").fadeIn(500);
    });   
    
    $('#failuresicon').click(function() {
        $('#failuresinfo').fadeIn(500);
        $('.infobackground').fadeIn(500);
        $('#failuresicon').fadeOut(500);
    });  
    $('#failuresimg').click(function() {
        $('#failuresinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $('#failuresicon').fadeIn(500);
    });
    $("#sweden").click(function() {
        $('#failuresinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $("#sweden").fadeIn(500);
    });      
    
    $('#bureplatsenicon').click(function() {
        $('#bureplatseninfo').fadeIn(500);
        $('.infobackground').fadeIn(500);
        $('#bureplatsenicon').fadeOut(500);
    });  
    $('#bureplatsenimg').click(function() {
        $('#bureplatseninfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $('#bureplatsenicon').fadeIn(500);
    });
    $("#sweden").click(function() {
        $('#bureplatseninfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $("#sweden").fadeIn(500);
    });  
    
///////////////////////////////////////
//ICELAND
//////////////////////////////////////  
    
// Iceland Image Popups    
    $('#seljavallulaugloc').click(function() {
        $('#seljavallulaugimg').fadeIn(500);
        $('#seljavallulaugicon').fadeIn(500);
    });
    $('#hvitserkurloc').click(function() {
        $('#hvitserkurimg').fadeIn(500);
        $('#hvitserkuricon').fadeIn(500);
    });    
    $('#fjadrargljufurloc').click(function() {
        $('#fjadrargljufurimg').fadeIn(500);
        $('#fjadrargljufuricon').fadeIn(500);
    });    
    $('#dimmuborgirloc').click(function() {
        $('#dimmuborgirimg').fadeIn(500);
        $('#dimmuborgiricon').fadeIn(500);
    });
    $('#landloc').click(function() {
        $('#landimg').fadeIn(500);
        $('#landicon').fadeIn(500);
    }); 
    $('#witchcraftloc').click(function() {
        $('#witchcraftimg').fadeIn(500);
        $('#witchcrafticon').fadeIn(500);
    });
    $('#heimayloc').click(function() {
        $('#heimayimg').fadeIn(500);
        $('#heimayicon').fadeIn(500);
    });
    $('#tingvellirloc').click(function() {
        $('#tingvellirimg').fadeIn(500);
        $('#tingvelliricon').fadeIn(500);
    });
    $('#hraunfossarloc').click(function() {
        $('#hraunfossarimg').fadeIn(500);
         $('#hraunfossaricon').fadeIn(500);
    });
    $('#petrasloc').click(function() {
        $('#petrasimg').fadeIn(500);
        $('#petrasicon').fadeIn(500);
    });   
    
// Return to map Iceland
    $("#iceland").click(function() {
        $('#seljavallulaugimg').fadeOut(500);
        $("#hvitserkurimg").fadeOut(500);
        $("#fjadrargljufurimg").fadeOut(500);
        $("#dimmuborgirimg").fadeOut(500);
        $("#landimg").fadeOut(500);
        $("#witchcraftimg").fadeOut(500);
        $("#heimayimg").fadeOut(500);
        $("#tingvellirimg").fadeOut(500);
        $('#hraunfossarimg').fadeOut(500);
        $("#petrasimg").fadeOut(500);
        $('#seljavallulaugicon').fadeOut(500);
        $("#hvitserkuricon").fadeOut(500);
        $("#fjadrargljufuricon").fadeOut(500);
        $("#dimmuborgiricon").fadeOut(500);
        $("#landicon").fadeOut(500);
        $("#witchcrafticon").fadeOut(500);
        $("#heimayicon").fadeOut(500);
        $("#tingvelliricon").fadeOut(500);
        $('#hraunfossaricon').fadeOut(500);
        $("#petrasicon").fadeOut(500);
        $("#iceland").fadeIn(500);
    });  

// Iceland info popups
    $('#seljavallulaugicon').click(function() {
        $('#seljavallalauginfo').fadeIn(500);
        $('.infobackground').fadeIn(500);
        $('#seljavallulaugicon').fadeOut(500);
        });  
    $('#seljavallulaugimg').click(function() {
        $('#seljavallalauginfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $('#seljavallulaugicon').fadeIn(500);
    });
    $("#iceland").click(function() {
        $('#seljavallalauginfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $("#iceland").fadeIn(500);
    }); 
    
    $('#hvitserkuricon').click(function() {
        $('#hvitserkurinfo').fadeIn(500);
        $('.infobackground').fadeIn(500);
        $('#hvitserkuricon').fadeOut(500);
    });  
    $('#hvitserkurimg').click(function() {
        $('#hvitserkurinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $('#hvitserkuricon').fadeIn(500);
    });
    $("#iceland").click(function() {
        $('#hvitserkurinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $("#iceland").fadeIn(500);
    }); 
    
    $('#fjadrargljufuricon').click(function() {
        $('#fjadrargljufurinfo').fadeIn(500);
        $('.infobackground').fadeIn(500);
        $('#fjadrargljufuricon').fadeOut(500);
    });  
    $('#fjadrargljufurimg').click(function() {
        $('#fjadrargljufurinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $('#fjadrargljufuricon').fadeIn(500);
    });
    $("#iceland").click(function() {
        $('#fjadrargljufurinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $("#iceland").fadeIn(500);
    }); 
    
    $('#dimmuborgiricon').click(function() {
        $('#dimmuborgirinfo').fadeIn(500);
        $('.infobackground').fadeIn(500);
        $('#dimmuborgiricon').fadeOut(500);
    });  
    $('#dimmuborgirimg').click(function() {
        $('#dimmuborgirinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $('#dimmuborgiricon').fadeIn(500);
    });
    $("#iceland").click(function() {
        $('#dimmuborgirinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $("#iceland").fadeIn(500);
    }); 
    
    $('#landicon').click(function() {
        $('#landinfo').fadeIn(500);
        $('.infobackground').fadeIn(500);
        $('#landicon').fadeOut(500);
    });  
    $('#landimg').click(function() {
        $('#landinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $('#landicon').fadeIn(500);
    });
    $("#iceland").click(function() {
        $('#landinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $("#iceland").fadeIn(500);
    }); 
    
    $('#witchcrafticon').click(function() {
        $('#witchcraftinfo').fadeIn(500);
        $('.infobackground').fadeIn(500);
        $('#witchcrafticon').fadeOut(500);
    });  
    $('#witchcraftimg').click(function() {
        $('#witchcraftinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $('#witchcrafticon').fadeIn(500);
    });
    $("#iceland").click(function() {
        $('#witchcraftinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $("#iceland").fadeIn(500);
    });   
    
    $('#heimayicon').click(function() {
        $('#heimayinfo').fadeIn(500);
        $('.infobackground').fadeIn(500);
        $('#heimayicon').fadeOut(500);
    });  
    $('#heimayimg').click(function() {
        $('#heimayinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $('#heimayicon').fadeIn(500);
    });
    $("#iceland").click(function() {
        $('#heimayinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $("#iceland").fadeIn(500);
    });   
    
    $('#tingvelliricon').click(function() {
        $('#tingvellirinfo').fadeIn(500);
        $('.infobackground').fadeIn(500);
        $('#tingvelliricon').fadeOut(500);
    });  
    $('#tingvellirimg').click(function() {
        $('#tingvellirinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $('#tingvelliricon').fadeIn(500);
    });
    $("#iceland").click(function() {
        $('#tingvellirinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $("#iceland").fadeIn(500);
    });
    
    $('#hraunfossaricon').click(function() {
        $('#hraunfossarinfo').fadeIn(500);
        $('.infobackground').fadeIn(500);
        $('#hraunfossaricon').fadeOut(500);
        });  
    $('#hraunfossarimg').click(function() {
        $('#hraunfossarinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $('#hraunfossaricon').fadeIn(500);
    });
    $("#iceland").click(function() {
        $('#hraunfossarinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $("#iceland").fadeIn(500);
    }); 
    
    $('#petrasicon').click(function() {
        $('#petrasinfo').fadeIn(500);
        $('.infobackground').fadeIn(500);
        $('#petrasicon').fadeOut(500);
    });  
    $('#petrasimg').click(function() {
        $('#petrasinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $('#petrasicon').fadeIn(500);
    });
    $("#iceland").click(function() {
        $('#petrasinfo').fadeOut(500);
        $('.infobackground').fadeOut(500);
        $("#iceland").fadeIn(500);
    });       

});

function myFunction(x) {
    x.classList.toggle("change");
}