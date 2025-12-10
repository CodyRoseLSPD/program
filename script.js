document.getElementById("scrollDown").addEventListener("click", () => {
    document.getElementById("biuro-szefa").scrollIntoView({
        behavior: "smooth"
    });
});


const postulatCards = document.querySelectorAll('.postulat-card');

const observer = new IntersectionObserver(entries=>{
    entries.forEach((entry, index)=>{
        if(entry.isIntersecting){
            setTimeout(()=> entry.target.classList.add('fade-in'), index*200);
        }
    });
},{threshold:0.3});

postulatCards.forEach(card => observer.observe(card));

const profiles = {
    "cody": {
        name: "Cody Rose",
        role: "Chief Of Police",
        photo: "3.png",
        desc: `Nazywam się Cody Rose. Od wielu lat służę w LSPD i bardzo dobrze znam tę pracę. W swojej karierze pracowałem w różnych jednostkach, także specjalnych, dzięki czemu zdobyłem duże doświadczenie w trudnych sytuacjach i ważnych decyzjach. Miałem też okazję pracować w Biurze Szefa na innych stacjach, więc wiem, jak wygląda zarządzanie i odpowiedzialność na wysokim stanowisku.

Lubię zwierzęta i zawsze traktuję je z szacunkiem. Uważam, że pokazuje to, jaki jestem z natury, tzn. spokojny, otwarty i życzliwy. Zawsze staram się stworzyć przyjazną atmosferę w pracy. Każdego wysłucham, niezależnie od stopnia czy problemu, bo wierzę, że dobra komunikacja jest kluczem do współpracy.

Jako kandydat na Szefa Policji chcę wprowadzać jasne zasady, wspierać cały zespół i budować departament oparty na uczciwości i wzajemnym szacunku.`

    },
    "jack": {
        name: "Jack Shovel",
        role: "Assistant Chief Of Police",
        photo: "jaca.png",
        desc: `Jack Shovel to Sergeant z dużym doświadczeniem, który od lat pracuje w Departamencie. Prywatnie oraz służbowo również się długo znamy. Był kiedyś Kapitanem Field Training Division i do dziś trzyma pieczę nad tą jednostką. Dba o to, aby do służby trafiali odpowiedni ludzie, czyli tacy, którzy naprawdę pasują do pracy w policji i potrafią działać w zespole.

Jack świetnie zna procedury oraz sprawy prawne. Trudno go zagiąć, bo zawsze jest przygotowany i dokładnie wie, jakie zasady obowiązują w każdej sytuacji. Dzięki temu często jest osobą, do której inni przychodzą po radę.

Jest człowiekiem, który potrafi rozwiązywać problemy szybko i spokojnie. Zachowuje chłodną głowę, umie ocenić sytuację i znaleźć najlepsze wyjście. To ktoś, na kim zawsze można polegać zarówno w codziennej pracy, jak i w trudnych momentach.`
    },
    "marek": {
        name: "Mark Clarkson",
        role: "Captain I",
        photo: "1.png",
        desc: `Mark Clarkson to officer z długim stażem, który przez lata zdobył ogromne doświadczenie w pracy w terenie i w kierowaniu zespołem. Ma naturalny talent do zarządzania ludźmi i potrafi wydawać jasne polecenia, utrzymać porządek i zadbać o to, aby każdy wiedział, co ma robić.

Jest pewny siebie, zdecydowany i potrafi działać pod presją, dlatego świetnie odnajduje się w sytuacjach, które wymagają szybkiej reakcji i dobrej organizacji. Mark zawsze stawia na skuteczność, ale jednocześnie dba o to, by jego ludzie czuli się wspierani i wiedzieli, że mogą na niego liczyć.

To Officer, który idealnie nadaje się do prowadzenia zespołów i koordynowania działań, a nawet można powiedzieć, że jest do tego po prostu stworzony.`
    },
    "matthew": {
        name: "Matthew Rose-Harrington",
        role: "Deputy Chief Of Police",
        photo: "2.png",
        desc: `Matthew Rose-Harrington nie ma jeszcze tak długiego stażu jak Ja czy Jack, ale mimo krótszego doświadczenia szybko udowodnił, że jest wyjątkowym funkcjonariuszem. Jest osobą otwartą, miłą i bardzo cierpliwą. Zawsze wie, jak podejść do drugiego człowieka i z której strony z nim rozmawiać, dzięki czemu potrafi spokojnie i profesjonalnie rozwiązywać różne sytuacje.

Znamy się prywatnie, ponieważ poznałem go, gdy przechodził trudny moment w swoim życiu. Z czasem się zaprzyjaźniliśmy, a pracując razem, widziałem, jak pod moją wodzą wyrasta na mądrego, odpowiedzialnego i naprawdę dobrego funkcjonariusza. W swojej karierze był również Detektywem oraz Sierżantem jednostki detektywistycznej, co dało mu duże doświadczenie w sprawach dochodzeniowych. Można powiedzieć, że w swojej pracy jest prawie nie do zastąpienia.

W Biurze Szefa jego rola będzie ważna. Zajmie się dokumentacją, sprawami technicznymi, informacyjnymi itp. innymi rzeczami. To ogrom obowiązków, które wykonuje rzetelnie i dokładnie, odciążając resztę zespołu. Dzięki niemu Biuro będzie działało sprawnie, a Departament może liczyć na solidne wsparcie od zaplecza.`
    }
};

const modalOverlay = document.getElementById("modalOverlay");
const modalName = document.getElementById("modalName");
const modalRole = document.getElementById("modalRole");
const modalDescription = document.getElementById("modalDescription");
const modalPhoto = document.getElementById("modalPhoto");
const modalCloseBtn = document.getElementById("modalCloseBtn");

document.querySelectorAll(".biuro-card").forEach(card => {
    card.addEventListener("click", () => {
        const id = card.dataset.profile; 
        const p = profiles[id];
        if (!p) return;

        modalName.textContent = p.name;
        modalRole.textContent = p.role;
        modalDescription.textContent = p.desc;
        modalPhoto.src = p.photo;

        modalOverlay.style.display = "flex";
    });
});

modalCloseBtn.addEventListener("click", () => {
    modalOverlay.style.display = "none";

});

