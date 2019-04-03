import React, { Component } from 'react';

class Arti extends Component {

    state = {
        selectedOption: 'Select',
        options: ['Select', 'Kakad Aarti', 'Madhyan Aarti', 'Dhoop Aarti', 'Shej Aarti']
    };

    handleChange = (event) => {
        this.setState({ selectedOption: event.target.value });
    }



    render() {

        return (
            <div className="container">
                <div className="row artiRow">
                    <form>
                        <div className="formGroup">

                            <select id="Arti" className="formControl" onChange={this.handleChange}>
                                {this.state.options.map((option, index) => <option key={index}>{option}</option>)}
                            </select>
                        </div>


                    </form>
                </div>
                {this.state.selectedOption == 'Kakad Aarti' ?
                    
                     <div className="row">
                            <div className="col s12 m12">
                                <div className="card blue-grey darken-1">
                                    <div className="card-content white-text">
                                        <span className="card-title">Kakad Aarti</span>
                                        <p>
                                        Kakada Aarthi
Composed by :: Sant Tukaram Maharaj
Joduniyaa kara charanee ttevilaa mathaa
Parisawee vinanthee maajzee Sadgurunaathaa
Aso naso bhaava aalo tujziyaa ttaayaa
Kripaa drishtee paahe majzakade Sadgururaayaa
Akhandeeta asaave aise vaatate paayee
Sandoonee sankoch ttaava todaasaa deyee.
Tukaahmane Devaa maajzee vedeevaakudee
Naame bhavapaasaa haathee aapulyaa thondi
2 . BHUPALI
Composed by :: Sant Janabai
Uttaa Paandurangaa aataa prabhaatasamayo paatalaa
Vaishnawaancha melaa garudapaaree daatalaa
Garuda paaraapaasunee mahaadwaaraa payanta
Suravaraanchee maandee ubhee jodooniyaa haat
Suka anakaadika naarada tumbara bhaktanchyaa kotee
Trisool damaroo ghewooni wubhaa girijechaa patee
Kaleeyugeechaa bhakta Namaa ubhaa keertanee
Paatteemaage wubhee dolaa laavuniyaa Janee
3 BHUPALI
Composed by :: Shri Krishna Jogiswar Bhishma
Utta utta Sri Sainaathaguru charana kamala daavaa
Aadhivyaadhi bhavataapa vaarunee taaraa jadajeevaa :(dhr):
Gelee tumha soduniyaa bhava tama rajanee vilayaa
Pareehi agnaanaasee tumachee bhulavi yogamaayaa
Sakthi na amhaa yatkinchitahee tijalaa saaraya
Tumheecha teete saaruni daavaa mukha jana taaraayaa
Bho Sainaatha Maharaaja bhava timiranaasaka ravee
Agnanee aamhee kitee tumhicha varnaava thoravee
Thee varnitaa bhaagale bahuvadani sesvidhi kavee
Sakripa howuni mahimaa tumachaa tumheecha vadavaava Adhi….. Utha…..
Bhakta manee sadbhaava dharooni je tumha anusarale,
Dhyaanyasthawa te darsana tumache dwwari ubhe ttele
Dhyaanasthaa tumha asa paahunee mana amuche ghaale,
Paree thwadvachanaamrith praasaayaate aatura jzhaale
Wughadoonee netrakamalaa deenabandhu Ramakaanta,
Paahi baa kripadrishtee baalakaa jashee maaataa 
Ranjavee madhuravaanee haree taapa Sainaatha
Aamhceecha aapule karyaasthava tuja kashtavito Deva
Sahana karisil te aikuni dyaavee bhett Krishna daava
Utha…… adhivyadhi
4. BHUPALI
Composed by :: Sant Namdev
Utta Panduranga aataa darash dhya sakala
Jzhala arunodaya sarali nidrechi vela
Sant sadhu muni avaghe jhaleti ghola
Soda sheje sukhe aata bagdu ghya mukha kamala
Rang mandapi mahadwari jzzaalise daati
Man utaaveel roop pahawaya drishti.
Rahee rakhumabai tumha yewoo dya daya
Sheje haalawunee jage kara Dev raya
Garud Hanumant ubhe paahatee wat
Swargiche surwar ghewuni aale bobhat
Zhale muktha dwar laabha zhala rokada
Vishnudas naama ubha ghewooni kakada.
5. ABHANG Aarthi with Five-Wick Lamp
Composed by :: Shri Krishna Jogiswar Bhishma
Ghewuniya panchaarati, karoo Babansi aarati
Utta utta ho bandhawa. Owaaloo ha Ramadhava.
Karooniya sthira man, pahu gambhirira he dhyan
Sayeeche he dhyan pahu gambhirira he dhyan
Krishnanatha Datt Sai jado chitta tujze paayee
Chitta Deva paayee Jado chitta tuzhe paayee
6.KAKAD AARTHI
Composed by:: Shri Krishna Jogiswar Bhishma
Kaakad aarati kareeto Sainatha deva
Chinmaya roop daakhavee ghewuni balak laghu seva
Kaam krodh mad matsar aattunee kaakada kela
Vairagyache toop ghaaluni mee to bhijaveela 
Sainath Guru bakti jwalane to mee petawila
Tad vryitti jaluni guroo ne prakash paadila
Dwaita tama naasooni milavi tatswaroopi jeewa
Chinmaya …. Kaakad…. Aarati….
Bhoochar khechar vyaapooni awaghe hritkamali raahasee
Tochi dattaadev tu shridi raahuni paawasee
Rahooni yethe anayatrahitoo baktaastava dhavasee
Nirasooniyaa sankata daasaa anubhawa daavisee
Na kale twalleelahee konyaa devaa waaa maanavaa
Chinmaya …. Kaakad…. Aarati….
Twat yasha dundubheene saare ambar he kondale
Sagun murti paahanyaa aatur jan Shirdee aale
Proshuni twadvachanaamrita aamuche dehabhaan haarpale
Sodooniyaa durabhimaan maanas twaccharanee waahile
Kripa karooniya Sai maawle daas padari ghyaawaa
Chinmaya …. Kaakad…. Aarati….
7. KAKADA AARTHI
Composed by :: Sant Tukaram Maharaj
Bhaktaachiya potee bodh kaakada jyoti
Pancha prana jeevebhave owaaloo aarthi
Owaaloo aaratee maajyza pandhareenaatha majyza Sainathaa
Donhi kara jodonee charanee ttevilaa mathaa
Kaay mahima varnoo aataa sangane kitee
Kotee brahma haiyaa makha pahataa jaatee
Rahee rakhmaabaayee ubhya doghee do baahee
Mayur pincha chaamara dhaaliti thaayee che thaayee
Tuka mhane deep ghewuni unmaneet shobhaa
Vittevaree ubha dise laawanya gaabhaa.
Owaaloo aaratee …
8. PADH
Composed by :: Sant Namadev
Utta utta saadhu sant aapulale hit
Jaaeel jaaeel ha nardeh mag kaincha bhagawan
tUttoniya pahaante baba ubha ase vitte
Charan tayaache gomate amrit drishti awalokaa
Utta utta ho vegesee chalaa jaawoonya raawulaasee
Jalatil patakaanchya raashi kaakad aarati dekhliyaa
Jaage karaa rukhminivar, dev aahe nijasuraant 
Vege limbalon karaa drisht hoeel tayasee
Daaree waajantree vaajatee dhol damaame garijatee
Hote kaakad aarati maazhyaa Sadguru rayaanchee
Simhanaad shankabheree aanand hoto mahaa dwaaree
Keshawaraaj vittewaree naamaa charan vandito
9. BHAJAN
Composed by :: Smt. Raghunath Savitri Tendulkar
Sainath Guru maajhe aaee
Majlaa thaav dhyaavaa paayeen
Datta raaja Guru majhe aaee
Majlaa thaav dhyaavaa paayeen
10. SAINATH PHABHATASTAK
Composed by :: Shri Krishna Jogiswar Bhisma
Prabhaat samayeen nabhaa shubh ravi prabha phaankalee
Smare guru sadaa ashaa samayin tya chhale naa kalee
Monhoni kar jodoonee karoon ataa Guru praarthanaa
Samartha Guru Sainath puravee manovaasanaa
Tamaa nirasi bhaanu ha Guruhi naasi agnyaanataa
Parantu Suruchee karaa na ravihee kadhee saamyathaa
Punhaa thimir janm ghe Gurukrupeni agnaan naa
Samartha Guru Sainath puravee manovaasanaa
Ravi pragat howuni twarita ghaalawee aalasaa
Tasa guruhi sodawee sakal dushkriti laalasaa
Haroni abhimaanahee jadwi tatpadee bhavanaa
Samartha Guru Sainath puravee manovaasanaa
Guroosi upama dise vidhi hareeharaanchi unee
Kuttoni mag yeie tee kavaniyaa ugee paahunee
Tuzheech upama tulaa baravi shobhate sajjanaa
Samartha Guru Sainath puravee manovaasanaa
Samaadhi uthroniyaa Guru chalaa mashidee kade
Twadeeya vachnokti tee madhur vaaritee saankhade
Ajaataripu Sadguro akhil pathkaa bhanjanaa
Samartha Guru Sainath puravee manovaasanaa
Ahaa susamayaasi yaa Guru uttoniyaa baisale
Vilokuni padaashrithaa tadiya aapade naasile
Asaa suhithkaaree yaa jagati konihee anya naa
Samartha Guru Sainath puravee manovaasanaa
Asa bahut shaahanaaa pari na jyaa Guroochi kripaa 
Na tatswahit tyaa kalae karitase rikamya gapaa
Jari Gurupada dhari sudhrid bhaktineh tho manaa
Samartha Guru Sainath puravee manovaasanaa
Guro vinati mee karee hridayamandiree yaa basaa
Samasth jag he guruswaroopee ttaso maanasaa
Ghado satat sathkrutee matihi deh jagatjpaavanaa
Samartha Guru Sainath puravee manovaasanaa
Preme yaa asthakaashi paduni Guruvaraa
Praarthitee je prabhaatee
Tyaanche chittasee deto akhilharooniyaan
Braanti mee nitya shaantee
Aise he Sainathe kathuneesuchvileh jevee yaa baalakaasee
Tevee tyaa Krishnapaayee namuni
Savinayeh arpito ashtakaasee
XI. PADH
Composed by :: Sri Dasganu Maharaj
Sai raham nazar karnaa Bachonkaa paalan karnaa
Sai raham nazar karnaa Bachonkaa paalan karnaa
Jaanaatumneh jagat pasaaraa Sabahee jzhoott jamaanaa
Jaanaatumneh jagat pasaaraa Sabahee jzhoott jamaanaa Sai raham…
Mein andhaa hoon bandaa aabkaa Mujhse prabhu dikhlaanaa
Mein andhaa hoon bandaa aabkaa Mujhse prabhu dikhlaanaa Sai raham…
Daas ganu kahe ab kyaa boloo Thak gayi meree rasnaa.
Daas Ganu kahe ab kyaa boloo Thak gayi meree rasnaa. Sai raham…
XII. PADH
Composed by :: Sri Dasganu Maharaj
Raham nazar karo, ab more Sayee Tumbin naheen mujze maa baap bhaayee
Raham nazar karo Raham nazar karo
Mein andhaa hoon banda tumhaaraa Mein andhaa hoon banda tumhaaraa
Mein naa jaanoon Mein naa jaanoon Mein naa jaanoon Allaah ilaahee Raham ....
Khalee jamaanaa meineh gamaayaa Khalee jamaanaa meineh gamaayaa
Saathee aakhar kaa Saathee aakhar kaa Saathee aakhar kaa kiyaa na koyee Raham ....
Apne maszhid ka zhaadoo Ganoo hai Apne maszhid ka zhaadoo Ganoo hai
Maalik hamaare Maalik hamaare Maalik hamaare tum Baabaa Sayee Raham ....
XIII. PADH
Composed by :: Sant Jana Bai
Tujze kai devoon Saawalyaa mee khaayaa taree hoo 
Tujze kai devoon Sadguru mee khaayaa taree
Mee dubalee batik Naamyaachee jaan Shreeharee
Mee dubalee batik Naamyaachee jaan Shreeharee
Uchishta tulaa denen hee ghosht naa baree hoo
Uchishta tulaa denen hee ghosht naa baree
Toon jagannaath tujze deoon kashire bhaakaree
Toon jagannaath tujze deoon kashire bhaakaree
Nako ant madeeya pahoon sakhya bhagwantaa, Shrikaantaa
Maadhyaahnraatra vultoni gaelee hee aatan aan chittaa
Ja hoieel tujha re kaakadaa hee raolaantaree hoo
Ja hoieel tujha re kaakadaa hee raolaantaree
Aanateel bhakt naivedya hi naanaaparee
Aanateel bhakt naivedya hi naanaaparee
XIV. PADH
Composed by:: Shri Krishna Jogiswar Bhishma
Shreesadguru Baabaa Saayee hoo Shreesadguru Baabaa Saayee
Tujh waanchuni aashraya naahi bhutalee, Tujh waanchuni aashraya naahi bhutalee
Mee paapee patit dheemanda hoo Mee paapee patit dheemanda
Taarane malaa Gurunathaa jhadkari Taarane malaa Sainathaa jhadkari
Toon shaantikshamechaa meroo hoo Toon shaantikshamechaa meroo
Toon bhavaarnaveeche taaru Guruvaraa Toon bhavaarnaveeche taaru Guruvaraa
Guruvaraa majzasi paamaraa ataan udharaa
Tvarit lavlaahee tvarit lavlaahee
Mee budato bhavbhaya dohee udharaa Mee budato bhavbhaya dohee udharaa
Shreesadguru Baabaa......
Shri Satchitaanand Sadguru Sainaath Maharaaj ki Jai
Aum Raajaadhiraaja Yogiraaja ParaBrahma Sainaath Maharaaj 
Shri Satchitaanand Sadguru Sainaath Maharaaj ki

                                           
                                           </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    : ''
                }
                 {this.state.selectedOption == 'Madhyan Aarti' ?
                    
                    <div className="row">
                           <div className="col s12 m12">
                               <div className="card blue-grey darken-1">
                                   <div className="card-content white-text">
                                       <span className="card-title">Madhyan Aarti</span>
                                       <p>
                                       1 ABHANG Aarthi with Five-Wick Lamp
Composed by :: Shri Krishna Jogiswar Bhishma
(Abhang is a Maratha style of poetry)
Ghewuniya panchaarati, karoo Babansi aarati
Karoo Sai see aarati Karoo Babansi arati.
Utta utta ho bandhawa. Owaaloo ha Ramadhava.
Sayee Ramadhava. Owaloo ha Ramadhava.
Karooniya sthira man, pahu gambhirira he dhyan
Sayeeche he dhyan pahu gambhirira he dhyan
Krishnanatha Datt Sai jado chitta tujze paayee
Chitta Baba paayee Jado chitta tuzhe paayee
2 Aarthi Sai Baba
Composed By:: Shri Madhavrao Vamanrao Adkar
Aarti Sai Baba, saukhyadaataara jeeva. Charana rajaatalee
Dhyaava daasaan visaawaa, bhaktaa visaawaa. Aarti Sai Baba
Jaaluniyaan aananng swaswaroopee raahe dhanga
Mumukshu janaan daavee nija dolaan Sreeranga, dolaan Sreeranga Aarti Sai Baba
Jayaa manee jaisaa bhaava tayaa taisaa anubhava
Daawisee dayaaghanaa aisee tujzee hee maava tujzeeheemaava Aarti Sai Baba
Tumache naama dhyaataan hare sansrithi vyathaa
Agaadha tava karanee maarga daawisee anaadhaa,daawisee anaadhaa Aarti Sai
Baba
Kaliyugee avataara saguna parabrahm saachara
Avateerna jhaalase swami Datta digambara, Datta digambara Aarti Sai Baba
Aattan divasaan guruwaaree bhakta karitee waaree
Prabhupada pahaavayaa bhavabhaya niwaree, bhaya niwaree Aarti Sai Baba:
Maajan nija dravya tteewaa tav charan rajasevaa
Maagane hechiyaataa tumhan devaadhideva, Devaadhideva Aarti Sai Baba
Ichchita deena chaatak nirmala toya nijasookha
Paajaawe maadhavaa yaa saambhal aapulee bhaaka, aapulee bhaaka Aarti ... 
3 Aarthi
Composed By:: Shri Krishna Jogiswar Bhishma
Jaya Deva Jaya Deva Datta avadhutaa, O Sayee avadhutaa
Jodoonikara tava charanee ttevito maathaa, Jaya Deva Jaya Dev
Avataraseen too yaetaan dharmaante glanee, Naastheekaanaahee too laavisi
nijabhajanee
Daavisi naanaa leela asankhya roopaanee, Harisee dheenanche too sankata
dinarajanee
Jaya Deva Jaya Deva...
Yavana swaroopee aikhyaa darshana twaan dhidhale, Samsaya nirsuniyaan
thathdwaitaa ghaalavile
Gopichandaa mandaa twaanchee uddharile, Momina vamsee janmuni lokaan
taariyale
Jaya Deva Jaya Deva...
Bhed na tathwee hindoo yavananchaa kaanhee Daawayaansee jzaalaa punarapi
naradehee
Paahasin premaane too Hindu yavanaanhee, Daavisi aatmatwaane vyaapaka haa
sayee
Jaya Deva Jaya Deva...
Devaa Sayeenaathaa twatpadanata vhaahe, paramaayaamohita janamochana
jhanin vhaave
Twakripayaa sakalaanche sankata nirasaawe, deshila tari de twadhyash
krishnaane gaave
Jaya Deva Jaya Deva...
4 ABHANG
Composed By:: Shri Dasganu Maharaj
Shirdee maajze Pandharapura Saibaba Ramaavara
Baba Ramaavara, Sai Baba Ramaavara
Shuddha bhaktee chandrabhaabagaa, Bhaava pundaleeka jaagaa
pundaleeka jaagaa. Bhaava pundaleeka jaagaa
Yaa ho yaa ho avaghe jana karaa Babaansee vandana.
Saisi vandana karoo Babaansee vandana
Ganu mhane Baba Sayee. Dhaava paava maajze aayee
paava maajze aayee. Dhaava paava maajze aayee 
5 Naman
 A garland of traditional prayers

Ghaaleena lotaangana vandeen charana Dolyanee paaheen roop tujze
Preme aalingana aanande poojin, Bhave oowaalina mhane Naamaa.
Tvameva maataa cha pitaa tvameva Tvameva bandhuscha sakhaa tvameva
Tvameva vidyaa dravinam tvameva, Tvameva servam mama Devadeva.
Kaayena vaachaa manasrendriyaiarwan Budhyatmanaa vaa prakriti swabhavaat
Karomi yadyatsakalam parasmai, Narayanaayeti samarpayaami
Acyutam Keshavam Raamanaaraayanam Krishnadaamodaram Vaasudevam Harim
Shreedharam Maadhavam Gopikaa Vallabham, Jaanakeenaayakam
Raamachandram Bhaje.
Hare Rama, Hare Rama. Rama Rama Hare Hare
Hare Krishna, Hare Krishna. Krishna Krishna Hare Hare. X 3
Shri Gurudeva Datta.
6 Mantra Pushpam
Hari Om yagnena yagnamayajanta devaastaani dharmaani prathamaabyaasan
Tehanakam mahimaanah sachanta yatra poorve sadhyaa santi Devaah;
Aum rajaadhiraajaaya prasahya saahine namo vayam Vaishravanaaya kurmahe
Sa me kaaman kaama kaamaya mahyam kameswaro Vaishravano tathatu.
Kuberaraya Vaishravanaaya Mahaaraajaaya namah.
Om swasti saamrajyam bhojyam swaaraajyam vairaajyam, paarameshtyam
Raajyam mahaarajya maadhi patya mayam Samantaparyaa yeesyat
Saarvabhoumah saarvayushya aantaadaaparaaraadhaat prithivyai
Samudraparyanthaayaa ekaraalithi
Tadapyesha slokobhigeeto marutah parivestaaro marutah pariveshtaaro
maruttasyaavasan gruhe Avikshitasya kamaprer Visvedevaah sabhaa sada ithi
Shri Naarayana Vaasudevaaya Sri saccidananda Sadguru Saiñatha Maharaja ki
Jaya 
7 Namaskaaraastak
COMPOSED BY :: Shri Mohani Raj
Anantaa tulaa ten kase re sthavaave, Anantaa tulaa ten kase re namaave
Anantaa mukhaanchaa shine shesh gaataan, Namaskaar saashtaang Shri
Sainaatha.
Smaraave hmanee twatpadaa nitya bhaave, Wurave taree bhaktisaattee
swabhaave
Tarave jagaa taarunee maaya taataa,Namaskaar saashtaang Shri Sainaatha.
Vase jo sadaa daavayaa santleela, Dise agna lokaanparee jo janaalaa
Paree antaree gnaana kaiwalya daataa, Namaskaar saashtaang Shri Sainaatha.
Baraa laadhalaa janma haa maanvaachaa Naraa saarthakaa saadhaneebhuta
saacha
Dharoon Sayeepremaa galaayaa ahantaa, Namaskaar saashtaang Shri Sainaatha.
Dharave karee saana alpagna baala, Karaave amhaa dhanya chumboni gaalaa
Mukhee gala preme karaa graas aataan, Namaskaar saashtaang Shri Sainaatha.
Suraadeeka jyaanchyaa padaa vanditaantee, Sukadeeka jyaante samaanatva
detee
Prayagaadi teerthen padee nasmra hotaa, Namaskaar saashtaang Shri Sainaatha.
Tujhyaa jhya padaa paahtan gopabaalee, Sadaa rangalee chitswaroopee milaalee
Karee raasakreedaa save Krishna naathaa, Namaskaar saashtaang Shri Sainaatha.
Tulaa maahato maagane eka dhyaave, Karaa jodito deena atyanta bhaave
Bhavee mohaneeraaja haa taari aataan, Namaskaar saashtaang Shri Sainaatha.
8 Aisaa eyee baa
Aisaa eyee baa - Sayee digambaraa - Akshyaya roopa avataara
Sarvahi vyapaka too - Shrutisaara - anusayaatrikumaaraa - Aisaa eyee baa!
Kaashee snaana japa - pratidivashee - Kolhapura bhikshesee - nirmala nadi tungaa
Jala praasee - Nidra maahur deshee - Aisaa eyee baa
Jzholee lombatase vaamakaree - trishoola damaroo dhari
Bhakta varada sadaa sukhakaaree Deseel mukti charee - Aisaa eyee baa
Paayee paadukaa japamaala - kamandaloo - Mrigacchalaa - dhaarana kariseebaa
Naagajataa - Mukuta sobhato maathaa - Aisaa eyee baa
Tatpara tujyaa je dhyaanee - akshyaya Thyaanche sadhanee - Lakshmeevasa karee
Dinarajanee - Rakshisi sankat vaaruni - Aisaa eyee baa
Yaa pari dhyaana tujze gururaayaa - Drishya karee nayanaan yaa
Poornaananda sukhe hee kaayaa - Laavise hariguna gaayaa - Aisaa eyee.... 
9 Shri Sainatha Mahimna Strotrama
COMPOSED BY :: Shri Upasani Baba Maharaj
Sadaa satswaroopam chidaananda kandam
Jagat sambhavasthaana samhaara hetum
Swabhaktechhayaa maanusham darsayantam
Nameeswaram Sadgurum Sainaatham.
Bhavadwaantha vidhwamsa maarthaanda meeddyam
manovaagateetam munir dhyana gamyam
Jagadvyapakam nirmalam nirgunam twaam
Nameeswaram Sadgurum Sainaatham.
Bhawaambhodi magnaarthitaanaam lanaanaam
Swapaadaasritaanaam swabhakti priyaanaam
Samuddhaaranaartham kalow sambhavantam
Nameeswaram Sadgurum Sainaatham.
Sadaa nimba vrikshasya mooladhivaasaat
Sudhaasravinam tiktamapya priyantam
Tarum kalpa vrikshaadhikam saadhayantam
Nameeswaram Sadgurum Sainaatham.
Sadaa kalpavrikshyasya tasyaadhi moole
Bhawadbhava budhyaa saparyaadisevaam
Nrinaam kurwataam bhukti mukti pradantam
Nameeswaram Sadgurum Sainaatham
Anekaashrutaa tarkya leelaa vilaasaeih
Samaavishkruteshaana bhaasvat prabhaavam
Ahambhaava heenam prasannathma bhaawam
Nameeswaram Sadgurum Sainaatham.
Sataam Vishramaaraama mevaabhiraamam
sadaa sajjanaih samsthutam sannamadbhih
Janaamodadam bhakta bhadrapradantam
Nameeswaram Sadgurum Sainaatham.
Ajanmaadhyamekam param brahma saakshaat
Swayam sambhavam raamamevaavateernam
Bhawadharshanaathsam puneetah praboham
Nameeswaram Sadgurum Sainaatham.
Sree Sayeesa kripaanidhe akhilanrinaam sarwaartha siddhi prada 
Yushmatpaadarajah prabahavamatulam dhaataapi vaktaakshhamah
Sadbhakthyaa saranam kritaan jali putah samprapthithosmi prabho
Shrimath Sayi paresa paada kamalaa naanya ccharanyam mama
Sayiroopadhara raaghavottamam, Bhakta kaama vibhuda dhrumam prabhum
Maayayopahata chitta shudhayae, Chintayaamyahamaharnisam mudaa
Sharat sudhaamsu pratrima prakaasam, kripatapaatram tava Sainaatha
Twadeeya paadaabja samaashritaanaam, Swachhaayayaa taapamapaa karothu
Upaasanaa Daivata Sainaatha, Sthavairmayopaasaninaasthu sthatwam
Ramenmaromne tava paadayugme bhrungo, Yathaabji makarmda lubdhah
Aneka janmaarjita paapasamkshayo, Bhavet bhawatpaada saroja darshanaat
Kshamaswa sarvaanaparaadha poonjakaan, praseeda Sayeesa Sadguro
dayaanidhe
Sri Sainatha charanaamrita putachithaah, Sthwatpaada seva natrataah
satatamcha bhaktyaa
Samsaara janya duritaagha vinirgataaste, kaivalya dhaama paramam
samavaapnuvanti
Strotrame tatpatte bhakthyaa yonara athanmanaahsadaa
Sadguroh Sainaadhasya kripa paatram bhaveddhruham.
Karacharanakritam vaakkaayajam karmajam vaa
Shravananayanajam vaa maanasam vaaparadham
Viditamaviditam vaa sarvame tatshkamasva
Jaya Jaya karunaabdhe shri pabho sainaatha.
Shri Satchitaanand Sadguru Sainaath Maharaaj ki
Aum Raajaadhiraaja Yogiraaja ParaBrahma Sainaath Maharaaj
Shri Satchitaanand Sadguru Sainaath Maharaaj ki
                                       </p>
                                   </div>

                               </div>
                           </div>
                       </div>
                   : ''
               }
                {this.state.selectedOption == 'Dhoop Aarti' ?
                    
                    <div className="row">
                           <div className="col s12 m12">
                               <div className="card blue-grey darken-1">
                                   <div className="card-content white-text">
                                       <span className="card-title">Dhoop Aarti</span>
                                       <p>
                                       1 Aarthi Sai Baba
Composed By:: Shri Madhavrao Vamanrao Adkar
Aarti Sai Baba, saukhyadaataara jeeva. Charana rajaatalee
Dhyaava daasaan visaawaa, bhaktaa visaawaa. Aarti Sai Baba
Jaaluniyaan aananng swaswaroopee raahe dhanga
Mumukshu janaan daavee nija dolaan Sreeranga, dolaan Sreeranga Aarti Sai Baba
Jayaa manee jaisaa bhaava tayaa taisaa anubhava
Daawisee dayaaghanaa aisee tujzee hee maava tujzeeheemaava Aarti Sai Baba
Tumache naama dhyaataan hare sansrithi vyathaa
Agaadha tava karanee maarga daawisee anaadhaa,daawisee anaadhaa Aarti Sai
Baba
Kaliyugee avataara saguna parabrahm saachara
Avateerna jhaalase swami Datta digambara, Datta digambara Aarti Sai Baba
Aattan divasaan guruwaaree bhakta karitee waaree
Prabhupada pahaavayaa bhavabhaya niwaree, bhaya niwaree Aarti Sai Baba:
Maajan nija dravya tteewaa tav charan rajasevaa
Maagane hechiyaataa tumhan devaadhideva, Devaadhideva Aarti Sai Baba
Ichchita deena chaatak nirmala toya nijasookha
Paajaawe maadhavaa yaa saambhal aapulee bhaaka, aapulee bhaaka Aarti ...
2 Abhang
Composed By:: Shri Dasganu Maharaj
Shirdee maajze Pandharapura Saibaba Ramaavara
Baba Ramaavara, Sai Baba Ramaavara
Shuddha bhaktee chandrabhaabagaa, Bhaava pundaleeka jaagaa
pundaleeka jaagaa. Bhaava pundaleeka jaagaa
Yaa ho yaa ho avaghe jana karaa Babaansee vandana.
Saisi vandana karoo Babaansee vandana
Ganu mhane Baba Sayee. Dhaava paava maajze aayee
paava maajze aayee. Dhaava paava maajze aayee
3 Naman
A garland of traditional prayers
Ghaaleena lotaangana vandeen charana Dolyanee paaheen roop tujze
Preme aalingana aanande poojin, Bhave oowaalina mhane Naamaa.
Tvameva maataa cha pitaa tvameva Tvameva bandhuscha sakhaa tvameva
Tvameva vidyaa dravinam tvameva, Tvameva servam mama Devadeva.
Kaayena vaachaa manasrendriyaiarwan Budhyatmanaa vaa prakriti swabhavaat
Karomi yadyatsakalam parasmai, Narayanaayeti samarpayaami
Acyutam Keshavam Raamanaaraayanam Krishnadaamodaram Vaasudevam Harim
Shreedharam Maadhavam Gopikaa Vallabham, Jaanakeenaayakam
Raamachandram Bhaje.
Hare Rama, Hare Rama. Rama Rama Hare Hare
Hare Krishna, Hare Krishna. Krishna Krishna Hare Hare. X3
Shri Gurudeva Datta.
4 Namaskaaraastak
Composed By :: Shri Mohani Raj
Anantaa tulaa ten kase re sthavaave, Anantaa tulaa ten kase re namaave
Anantaa mukhaanchaa shine shesh gaataan, Namaskaar saashtaang Shri
Sainaatha.
Smaraave hmanee twatpadaa nitya bhaave, Wurave taree bhaktisaattee
swabhaave
Tarave jagaa taarunee maaya taataa,Namaskaar saashtaang Shri Sainaatha.
Vase jo sadaa daavayaa santleela, Dise agna lokaanparee jo janaalaa
Paree antaree gnaana kaiwalya daataa, Namaskaar saashtaang Shri Sainaatha.
Baraa laadhalaa janma haa maanvaachaa Naraa saarthakaa saadhaneebhuta
saacha
Dharoon Sayeepremaa galaayaa ahantaa, Namaskaar saashtaang Shri Sainaatha.
Dharave karee saana alpagna baala, Karaave amhaa dhanya chumboni gaalaa
Mukhee gala preme karaa graas aataan, Namaskaar saashtaang Shri Sainaatha.
Suraadeeka jyaanchyaa padaa vanditaantee, Sukadeeka jyaante samaanatva
detee
Prayagaadi teerthen padee nasmra hotaa, Namaskaar saashtaang Shri Sainaatha.
Tujhyaa jhya padaa paahtan gopabaalee, Sadaa rangalee chitswaroopee milaalee
Karee raasakreedaa save Krishna naathaa, Namaskaar saashtaang Shri Sainaatha.
Tulaa maahato maagane eka dhyaave, Karaa jodito deena atyanta bhaave
Bhavee mohaneeraaja haa taari aataan, Namaskaar saashtaang Shri Sainaatha. 
5 Aisaa eyee baa
Aisaa eyee baa – Sayee digambaraa – Akshyaya roopa avataara
Sarvahi vyapaka too – Shrutisaara – anusayaatrikumaaraa – Aisaa eyee baa!
Kaashee snaana japa – pratidivashee – Kolhapura bhikshesee – nirmala nadi
tungaa
Jala praasee – Nidra maahur deshee - Aisaa eyee baa
Jzholee lombatase vaamakaree – trishoola damaroo dhari
Bhakta varada sadaa sukhakaaree Deseel mukti charee - Aisaa eyee baa
Paayee paadukaa japamaala – kamandaloo – Mrigacchalaa – dhaarana kariseebaa
Naagajataa – Mukuta sobhato maathaa - Aisaa eyee baa
Tatpara tujyaa je dhyaanee – akshyaya Thyaanche sadhanee – Lakshmeevasa
karee
Dinarajanee – Rakshisi sankat vaaruni - Aisaa eyee baa
Yaa pari dhyaana tujze gururaayaa – Drishya karee nayanaan yaa
Poornaananda sukhe hee kaayaa – Laavise hariguna gaayaa - Aisaa eyee….
6 Shri Sainatha Mahimna Strotrama
Composed By :: Shri Upasani Baba Maharaj
Sadaa satswaroopam chidaananda kandam
Jagat sambhavasthaana samhaara hetum
Swabhaktechhayaa maanusham darsayantam
Nameeswaram Sadgurum Sainaatham.
Bhavadwaantha vidhwamsa maarthaanda meeddyam
manovaagateetam munir dhyana gamyam
Jagadvyapakam nirmalam nirgunam twaam
Nameeswaram Sadgurum Sainaatham.
Bhawaambhodi magnaarthitaanaam lanaanaam
Swapaadaasritaanaam swabhakti priyaanaam
Samuddhaaranaartham kalow sambhavantam
Nameeswaram Sadgurum Sainaatham.
Sadaa nimba vrikshasya mooladhivaasaat
Sudhaasravinam tiktamapya priyantam
Tarum kalpa vrikshaadhikam saadhayantam
Nameeswaram Sadgurum Sainaatham.
Sadaa kalpavrikshyasya tasyaadhi moole
Bhawadbhava budhyaa saparyaadisevaam
Nrinaam kurwataam bhukti mukti pradantam 
Nameeswaram Sadgurum Sainaatham.
Anekaashrutaa tarkya leelaa vilaasaeih
Samaavishkruteshaana bhaasvat prabhaavam
Ahambhaava heenam prasannathma bhaawam
Nameeswaram Sadgurum Sainaatham.
Sataam Vishramaaraama mevaabhiraamam
sadaa sajjanaih samsthutam sannamadbhih
Janaamodadam bhakta bhadrapradantam
Nameeswaram Sadgurum Sainaatham.
Ajanmaadhyamekam param brahma saakshaat
Swayam sambhavam raamamevaavateernam
Bhawadharshanaathsam puneetah praboham
Nameeswaram Sadgurum Sainaatham.
Sree Sayeesa kripaanidhe akhilanrinaam sarwaartha siddhi prada
Yushmatpaadarajah prabahavamatulam dhaataapi vaktaakshhamah
Sadbhakthyaa saranam kritaan jali putah samprapthithosmi prabho
Shrimath Sayi paresa paada kamalaa naanya ccharanyam mama
Sayiroopadhara raaghavottamam, Bhakta kaama vibhuda dhrumam prabhum
Maayayopahata chitta shudhayae, Chintayaamyahamaharnisam mudaa
Sharat sudhaamsu pratrima prakaasam, kripatapaatram tava Sainaatha
Twadeeya paadaabja samaashritaanaam, Swachhaayayaa taapamapaa karothu
Upaasanaa Daivata Sainaatha, Sthavairmayopaasaninaasthu sthatwam
Ramenmaromne tava paadayugme bhrungo, Yathaabji makarmda lubdhah
Aneka janmaarjita paapasamkshayo, Bhavet bhawatpaada saroja darshanaat
Kshamaswa sarvaanaparaadha poonjakaan, praseeda Sayeesa Sadguro
dayaanidhe
Sri Sainatha charanaamrita putachithaah, Sthwatpaada seva natrataah
satatamcha bhaktyaa
Samsaara janya duritaagha vinirgataaste, kaivalya dhaama paramam
samavaapnuvanti
Strotrame tatpatte bhakthyaa yonara athanmanaahsadaa
Sadguroh Sainaadhasya kripa paatram bhaveddhruham. 
7 Guru Prasada Yachanaastakam
Composed By:: B.V.Dev
Ruso mama priyaambikaa majavaree pitahee ruso
Ruso mama priyaangana priyasutaatmajaahee ruso
Ruso bhagini bandhuhee swasura saasubayee ruso
Na datta Guru Saayima majavaree kadheenhee ruso
Puso na sunabayee tyaa maja na bhratrujaayaa puso
Puso na priya soyare priya sage na gnateen puso
Puso suhrida naa sakhaa swajana naapta bandhu puso
Paree na Guru Saayima majavaree ksdheenhee ruso.
Puso na abalaa mulen tarun vriddhahee naa puso
Puso na Guru Dhakute maja na thor saane puso
Puso nacha bhale bure sujan sadhuheen naa puso
Paree na Guru Saayima majavaree ksdheenhee ruso
Ruso chatura tatwavit vibhudha praagna jnaanee ruso
Rusohi vidushee striyaa kushal panditaahee ruso
Ruso mahipatee yatee bhajak taapaseehe ruso
Na Datta Guru Saayima majavaree kadheenhee ruso
Ruso kavi rishee munee anagha siddha yogee ruso
Ruso hi grihadevataa ni kula grama Devee ruso
Ruso khala pishaascahee malin dhakineehee ruso
Na Datta Guru Saayima majavaree kadheenhee ruso
Ruso mriga khaga krimi akhila jeeva jantu ruso
Ruso vitap prastaraa achal aapagaabdhee ruso
Ruso kha pavan naagni vaar avani panchatathwe ruso
Na Datta Guru Saayima majavaree kadheenhee ruso
Ruso vimal kinnaraa amala yakshineehee ruso
Ruso shashi khagaadihee gagani taarakaahee ruso
Ruso amararaajahee adaya dharmaraajaa ruso
Na Datta Guru Saayima majavaree kadheenhee ruso
Ruso mana Saraawatee chapala chitta tehee ruso
Ruso vapu dishaakhilaa kattina kaal tohee ruso
Ruso sakal vishwahee mayi tu brahma golaaM ruso
Na Datta Guru Saayima majavaree kadheenhee ruso
Vimoodha hmanoonee haso majana matsaraahee daso
Padaabhi ruchi ulhasoh janan kardamee naa phaso
Na durga dhriticha dhaso ashivbhaav maage khaso 
Prapanchi manahe ruso dridda virakti chitee ttaso
Kunaachihi grinaa naso na cha sprihaa kashaachee aso
Sadaiva hridayee vaso manasi dhyani Sayee vaso
Padee pranaya voraso nikhila drishya baabaa diso
Na Dattaguru Saayima upari yaachneela ruso.
8 Mantra Pushpam
Hari Om yagnena yagnamayajanta devaastaani dharmaani prathamaabyaasan
Tehanakam mahimaanah sachanta yatra poorve sadhyaa santi Devaah;
Aum rajaadhiraajaaya prasahya saahine namo vayam Vaishravanaaya kurmahe
Sa me kaaman kaama kaamaya mahyam kameswaro Vaishravano tathatu.
Kuberaraya Vaishravanaaya Mahaaraajaaya namah.
Om swasti saamrajyam bhojyam swaaraajyam vairaajyam, paarameshtyam
Raajyam mahaarajya maadhi patya mayam Samantaparyaa yeesyat
Saarvabhoumah saarvayushya aantaadaaparaaraadhaat prithivyai
Samudraparyanthaayaa ekaraalithi
Tadapyesha slokobhigeeto marutah parivestaaro marutah pariveshtaaro
maruttasyaavasan gruhe Avikshitasya kamaprer Visvedevaah sabhaa sada ithi
Shri Naarayana Vaasudevaaya Sri saccidananda Sadguru Saiñatha Maharaja ki
Jaya
Karacharanakritam vaakkaayajam karmajam vaa
Shravananayanajam vaa maanasam vaaparadham
Viditamaviditam vaa sarvame tatshkamasva
Jaya Jaya karunaabdhe shri pabho Sainaatha.
Shri Naarayana Vaasudevaaya Sri saccidananda Sadguru Saiñatha Maharaja ki
Jaya
Shri Satchitaanand Sadguru Sainaath Maharaaj ki
Raajaadhiraaja Yogiraaja ParaBrahma Sainaath Maharaaj
Shri Satchitananda Sadguru Sainath Maharaaj Ki Jai !!! 
                                       </p>
                                   </div>

                               </div>
                           </div>
                       </div>
                   : ''
               }
                {this.state.selectedOption == 'Shej Aarti' ?
                    
                    <div className="row">
                           <div className="col s12 m12">
                               <div className="card blue-grey darken-1">
                                   <div className="card-content white-text">
                                       <span className="card-title">Shej Aarti</span>
                                       <p>1 - AARTHI
Composed by : Sant Tukaram Maharaj.
Owaloo aaratee mazhaa Sadgurunaathaa - maazhaa Sainaatha
Paanchaahee tatwaanche deep laawilaa aataan
Nirgunaachee sthitee kaisee aakaaraa aalee - Baba aakaaraa aalee
Sarvaa ghatee bharooni vuralee Sayee Maawoolee Owaloo aaratee....
RajaTamaSathwa tighe maayaa prasawalee - Mazyawara maayaa prasawalee
Mayecheeye potee kaisee maayaa udbhavalee Owaloo aaratee....
SaptaSaagaree kaisa khel maandeelaa - Baba khel maandeelaa
Khelooniyaa khel awagha visthaar kelaa Owaloo aaratee....
Brahmaandeechee rachanaa keisee daakhavilee dolaa - Baba daakhavilee dolaa
Tuka hmane maazhaa Swaamee kripaaloo bholaa Owaloo aaratee....
2 : JNANESWAR AARTHI
Composed by : Rama Janardhani Swami.
Lopale jnaana jagin - hita nenatee konee
Avataara Panduranga - nam ttevile jnanee
Aaratee Jnaanaraaja - mahaa kaivalya tejaa
Sevitee Saadhusanta - hmanu vedhalaa maazha Aaratee Jnaanaraaja.
Kanakachee tat kareen - Ubhyaa gopikaa naaree
Narada tumbaraho - samgaayan karee Aaratee Jnaanaraaja....
Pragata guhya bole - vishwa brahmachi kele
Rama Janardanee - payee masthak ttevile Aaratee Jnaanaraaja....
3: TUKARAM AARTHI
Composed by : Shri Rameswar Bhat.
Aaratee Tukaaraamaa - Swamee Sadguru dhaamaa
Satchidaananda murtee - paaya dakhavi aamhaa Aaratee Tukaaraamaa
Raaghave Saagaraat - jaise paashaan taarile
Taise he tuko baache - abhang rakshile Aaratee Tukaaraamaa...
Tukitaa tulanesee - brahma tukasee aale
Hmanoni raamesware - charanee mastak ttevile Aaratee Tukaaraamaa...
4 : SEJ AARTHI
Composed by : Shri Krishna Jogeswar Bhishma.
Jai jai Sainatha aataa pahudaave mandiree ho, Jai jai Sainatha aataa pahudaave
mandiree ho 
Aalavito sapreme tuzhala aaratee ghevuni kareeho, Jai jai Sainatha aataa
pahudaave mandiree ho
Ranjavisee too madhura bulunee - maaya jashi nija mulaa ho.
Ranjavisee too madhura bulunee - maaya jashi nija mulaa ho
Bhogisi vyadhee tunch haruniyaa - nijasevak dukhaalaa ho.
Bhogisi vyadhee tunch haruniyaa - nijasevak dukhaalaa ho.
Dhavuni bhakta vyasana harisi - darshan deshee tyaalaa ho
Dhavuni bhakta vyasana harisi - darshan deshee tyaalaa ho
Jzhaale astil kasta ateesaya tumache yaa dehaalaa ho Jai jai Sainatha...
Skhmaa shayana sundara hee shobhaa - suman shej tyaavareen ho
Skhmaa shayana sundara hee shobhaa - suman shej tyaavareen ho
Gdhyaavee todee bhakta jananchee - pujan archan kareen ho
Gdhyaavee todee bhakta jananchee - pujan archan kareen ho
Owaalito panchaprana - jyotee sumatee kareen ho
Owaalito panchaprana - jyotee sumatee kareen ho
Sevaa kinkara bhakta preetee - attar parimala vaaree ho Jai jai Sainatha...
Soduni jaayaa dukha waatate - Baba tava charanaansee ho
Soduni jaayaa dukha waatate - Sayee tava charanaansee ho
Agnesthavah aasi prasaada - ghevuni nijasadanaasee ho
Agnesthavah aasi prasaada - ghevuni nijasadanaasee ho
Jaato aata yevu punarapi - twatcharanaanche paashee ho
Jaato aata yevu punarapi - twatcharanaanche paashee ho
Uttavoon tujala Saimaavule - nijahitasaadhaa yaasee ho
Uttavoon tujala Saimavule - nijahitasaadhaa yaasee ho Jai jai Sainatha...
5 : SEJ AARTHI
Composed by : Shri Krishna Jogeswar Bhishma.
Aataa Swaamee sukhe nidraa karaa avadhutaa - Baba karaa Sainathaa
Chinmaya he sukhfhaama jaawuni pahudaa ekaantaa
Vairaagyaachaa kunchaa ghewuni chowk jhadeela - Baba chowk jhadeela
Tayaawaree supremaachaa shidakaavaa didhalaa Aataa Swaamee...
Paayaghadadyaa ghatalyaa sundar navavidhaa bhakti - Baba navavidhaa bhakti
Jnaanaachyaa samayaa laawuni ujalalyaa jyotee Aataa Swaamee...
Bhaavaarthaanchaa manchaka hridaya kaashee taangilaa - hridaya kaashee
taangilaa
Manaachee sumane karunee kele sheejelaa Aataa Swaamee...
Dwaitaache kapaat laavuni ekatra kele - Baba ekatra kele 
Durbuddheenchyaa gatte soduni padade sodeele Aataa swaamee...
Aashaa trishnaa kal[anechaa Soonduni galabala - Baba Saanduni galabala
Dayaa kshamaa shaantee daasee ubhyaa sewelaa Aataa Swaamee...
Alakshya unmanee ghevunee Baba naajuk dusshaalaa - Baba naajuk dusshaalaa
Niranjana Sadguru swamee nijavile shejelaa Aataa Swaamee...
Shri Satchitaanand Sadguru Sainaath Maharaaj ki
Shri Guru Deva Datta!
6 : ABHANG
Composed by : Sant Tukaram Maharaj.
Paahen prasadachee vaat ghyaave dhuvoniyaan taat
Sesh ghewoniaan taat Tumche jhaliyaan bhojan
Jhaalo aata eksavaa Tumha aadu niyaa devaa
Tuka hmane aatan chitt karooni raahilo nischint.
7 : ABHANG
Composed by : Sant Tukaram Maharaj.
Paawala prasaad aataa vitto nijaave - Baba aataa nijaave
Apulaa to shrama kalo yetase bhaave
Aataan Swaamee sukhe nidraa karaa Gopala - Baba Sai dayaalaa
Purale manorath jato aapule sthalaa.
Tumhaasee jaagawoo aamhi aapulya chaada - Baba aapulya chaada
Shubhashub karme dosh haraavayaa peedaa.
Aataan Swaamee sukhe nidraa karaa Gopala - Baba Sai dayaalaa
Purale manorath jato aapule sthalaa.
Tuka hmane didhale utchistaache bhojan - utchistaache bhojan
Naahi nivadile aamha apulya bhinn.
Aataan Swaamee sukhe nidraa karaa Gopala - Baba Sai dayaalaa
Purale manorath jato aapule sthalaa.
Aataan Swaamee sukhe nidraa karaa Gopala - Baba Sai dayaalaa
Purale manorath jato aapule sthalaa.
Sadguru Sainaath Maharaaj ki
Aum Raajaadhiraaja Yogiraaja ParaBrahma Sainaath Maharaaj
Shri Satchitaanand Sadguru Sainaath Maharaaj ki</p>
                                   </div>

                               </div>
                           </div>
                       </div>
                   : ''
               }
            </div>
        );
    }
}


export default Arti;