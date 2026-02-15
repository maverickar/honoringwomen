//! === ADD HEADER STYLES ON SCROLL ===
const headerScroll = () => {
    const headerElement = document.querySelector('.header');
    this.scrollY >= 30 ? headerElement.classList.add('active') : headerElement.classList.remove('active');
}

window.addEventListener('scroll', headerScroll);
//! === OPEN AND CLOSE THE MENU ON HAMBURGER ICON CLICK ===

const menuToggler = document.querySelector('#menu-toggler');
const navbarMenu = document.querySelector('.navbar__menu');
const toggleMenu = () => {
    navbarMenu.classList.toggle('active');
}
menuToggler.addEventListener('click', toggleMenu);
// --- CLOSE MENU WHEN NAV-LINKS ARE CLICKED ---
const linksToggleMenu = (e) => {
    if(e.target.classList.contains('navbar__list-link')) navbarMenu.classList.remove('active');
}
window.addEventListener('click', linksToggleMenu);

//! === LANGUAGE BUTTONS === 
function changeLanguage(id) {
    const bioDescription = document.getElementsByClassName('bio__information-description');
    console.log(bioDescription[0]);
    switch(id) {
        case 'btn-en':
            bioDescription[0].innerHTML = `Born in Argentina and living in Tromsø (Norway), Alejandro
            completed his Masters degree in Choral Conducting at the Norwegian Academy of Music in 2021
            under Prof. Grete Pedersen, after Orchestral Conducting and Piano studies in Argentina.`
            bioDescription[1].innerHTML = `He conducts Tromsø Akademiske Kvinnekor, Det Norske Mannskor av 1995 and Grønnåsen Kirkekor,
            having worked with groups such as Det Norske Solistkor, Vokal Nord, De Norske Kammersangere,
            Asker Kammerkor, Coro Polifónico Nacional Argentino, Rundfunk-Jugendchor Wernigerode and Tous
            Ensemble. He has participated in many international seminars and masterclasses with conductors
            like Daniel Reuss, Florian Helgath, Kaspars Putniņš, Håkon Daniel Nystedt, André van der Merwe,
            Romāns Vanags, Douglas Bostock and Ariel Alonso.`
            bioDescription[2].innerHTML = `He received the Distinguished Alumni prize in 2018, the Noël Minet Scholarship in 2020 and the
            Kulturrådets Statens Kunstnerstipend in 2021. He was shortlisted as a first reserve for the 2021
            Eric Ericson Award and was selected to participate in the 2022 Fosco Corti International Competition
            for Choral Conductors`
            break;

        case 'btn-no':
            bioDescription[0].innerHTML = `Født i Argentina og bosatt i Tromsø, Alejandro avla eksamen i
            kordireksjon i 2021 ved masterstudiet på Norges Musikkhøgskole under Prof. Grete Pedersen, 
            etter studier i orkesterdireksjon og piano i sitt fødselsland.`
            bioDescription[1].innerHTML = `Han er dirigent for Tromsø Akademiske Kvinnekor, Det Norske Mannskor av 1995
            og Grønnåsen Kirkekor, og har tidligere jobbet med kor som Det Norske Solistkor, Vokal Nord, De Norske Kammersangere,
            Asker Kammerkor, Coro Polifónico Nacional Argentino, Rundfunk-Jugendchor Wernigerode og Tous
            Ensemble. Han har deltatt i en lang rekke internasjonale seminarer og mesterklasser med 
            dirigenter som Daniel Reuss, Florian Helgath, Kaspars Putniņš, Håkon Daniel Nystedt, André van der Merwe,
            Romāns Vanags, Douglas Bostock og Ariel Alonso.`
            bioDescription[2].innerHTML = `I 2020 fikk han Noël Minet Stipendiet og i 2021 Kulturrådets
             Statens Kunstnerstipend. Han ble valgt ut som første reserve for Eric Ericson Prisen 2021
             og deltok i den 2022 Fosco Corti International Competition for Choral Conductors.`
            break;
        
        case 'btn-es':
            bioDescription[0].innerHTML = `Nacido en Argentina y radicado en Tromsø (Noruega), Alejandro cursa
            estudios de Dirección Orquestal y Piano en su país natal, completando con una maestría en Dirección
            Coral en la Academia Nacional de Música Noruega en el 2021 bajo la tutela de la Prof. Grete Pedersen.`
            bioDescription[1].innerHTML = `Actualmente dirige el Coro Académico Feminino de Tromsø, el Coro Masculino Noruego del 1995 and Coro de la Iglesia de Grønnåsen.
            Trabajó con grupos como el Norwegian Soloists Choir, Vokal Nord, De Norske Kammersangere,
            Asker Kammerkor, Rundfunk-Jugendchor Wernigerode y Tous Ensemble. Participó en múltiples seminarios y masterclasses internacionales con directores como
            Daniel Reuss, Florian Helgath, Kaspars Putniņš, Håkon Daniel Nystedt, André van der Merwe,
            Romāns Vanags, Douglas Bostock y Ariel Alonso.`
            bioDescription[2].innerHTML = `Entre los premios que ha recibido se cuentan el Alumno Distinguido en el 2018 por parte de la Universidad Nacional de La Plata, la Beca Noël Minet en el 2020 y
            la Beca para Artistas del Ministerio de Cultura Noruego en el 2021. Fue seleccionado como primera reserva para el Premio Eric Ericson Award 2021, mientras que en el 2022 participa de la Competencia
            Internacional para Directores de Coro Fosco Corti en Torino (Italia).`
            break;

        case 'btn-de':
            bioDescription[0].innerHTML = `Alejandro wurde in Argentinien geboren und ist jetzt wohnhaft in Tromsø (Norwegen).
            Nach dem Abschluss seines Orchesterdirigieren und Klavier Studiums in Argentinien zog er nach Norwegen, um bei 
            Prof. Grete Pedersen an der Norwegische Academy of Music zu studieren. In 2021 absolvierte er seinen Master in 
            Chordirigieren.`
            bioDescription[1].innerHTML = `Derzeit dirigiert er den Tromsø Akademischen Frauenchor, den Norwegischen Männerchor
             von 1995 und den Grønnåsen Kirchenchor. Ebenfalls arbeitete er mit Gruppen wie The Norwegian Soloists Choir, Vokal Nord, 
            Die Norwegischen Kammersängern, Asker Kammerchor, Coro Polifónico Nacional Argentino, Rundfunk-Jugendchor 
            Wernigerode und Tous Ensemble. Er nahm an zahlreichen internationalen Meisterkursen teil, mit Dirigenten wie Daniel Reuss,
            Florian Helgath, Kaspars Putniņš, Håkon Daniel Nystedt, André van der Merwe, Romāns Vanags, Douglas Bostock
            und Ariel Alonso.`
            bioDescription[2].innerHTML = `2018 bekam er den Distinguished Alumni Preis, 2020 das Noël Minet
            Stipendium und 2021 das Künstlerstipendium des Norwegisches Kunstrates. Auch 2021 ist er als erste Reserve
            für den Eric Ericson Award ausgewählt worden und nahm 2022 an dem Fosco Corti International Competition
            for Choral Conductors teil.`
            break;
    }

}

//! === SWIPER ===
const swiper = new Swiper('.myswiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
    },
    pagination: {
        el: '.swiper-pagination'
    }
});

//! === SCROLL REVEAL ===

const sr = ScrollReveal({
    distance: '50px',
    duration: 1500,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
});

sr.reveal('.showcase__title, .showcase__image, .section-metadata, .swiper', {
    origin: 'top',
    interval: 250
});

sr.reveal('.bio__information, .post--left', {
    origin: 'left',
});

sr.reveal('.bio__images, .post--right', {
    origin: 'right',
});

sr.reveal('.footer__container', {
    origin: top
});

