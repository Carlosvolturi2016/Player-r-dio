const audioPlayer = document.getElementById('audio-player');
const playButton = document.getElementById('play-btn');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const currentTrackDisplay = document.getElementById('current-track');
const albumCover = document.getElementById('album-cover');

const tracks = [
    { src: './musicas/Acende o fogo (Set a fire + Espontâneo) • DROPS.mp3', cover:'fotos/coração em chamas.jpg' , title: 'Acende o Fogo' },
    { src: 'musicas/AMBIENTE DE GLÓRIA -  Reuel e Dany Silva _ MEVAM MUSIC _ Live Session.mp3', cover: 'fotos/ambiente_de_gloria.jpg', title: 'Ambiente da Glória' },
    { src: 'musicas/Amigo Fiel (Faithful Friend).mp3', cover: 'fotos/amigo_fiel.jpg', title : 'Amigo Fiel' },
    { src: 'musicas/Você tem Azeite_ Você tem Óleo_ _ Clamor Pelas Nações.mp3', cover: 'fotos/azeite.jpg', title : 'Você tem Azeite_ Você tem Óleo' },
    { src: 'musicas/Sua Presença é Real   Pastor Antônio Cirilo   Santa Geração na Lagoinha   Diante do Trono.mp3', cover: 'fotos/presença.jpg', title : 'Sua Presença é Real' },
    { src: 'musicas/Voz de muitas Águas - Como prometeste.mp3', cover: 'fotos/muitas aguas.jpg', title : 'Como Prometeste' },
    { src: 'musicas/TE ENCONTREI (Meu Coração Está Ligado ao Teu) - Suzano Selmo.mp3', cover: 'fotos/encontro.jpg', title : 'Te Encontrei' },
    { src: 'musicas/Marcelo Nascimento - Levanta E Anda.mp3', cover: 'fotos/levanta.jpg', title : 'Levanta e Anda' },
    { src: 'musicas/(Cover) Basta uma palavra Ft Tuca Nascimento.mp3', cover: 'fotos/palavra revelada.jpg', title : 'Basta uma Palavra' },
    { src: 'musicas/Mauro Henrique - Herege [www.slider.kz].mp3', cover: 'fotos/graça.jpg', title : 'Herege' },
    { src: 'musicas/Y2meta.app - Não Há Barreiras (128 kbps).mp3', cover: 'fotos/em obras.jpg', title : 'Não há Barreiras' },
    { src: 'musicas/Te Amar.mp3', cover: 'fotos/20.jpg', title : 'Te amar' },
    { src: 'musicas/Triunfo.mp3', cover: 'fotos/22.jpg', title : 'Triunfar'},
    { src: 'musicas/Mauro Henrique - Aonde Está Deus [www.slider.kz].mp3', cover: 'fotos/desperta.jpg', title : 'Aonde está Deus' },
    { src: 'musicas/Y2meta.app - Restitui (Ao Vivo) (128 kbps).mp3', cover: 'fotos/tempo.jpg', title : 'Restitui' },
    { src: 'musicas/Nani Azevedo - Não Temas - DVD Bendito Serei.mp3', cover: 'fotos/capa.2.jpg', title : 'Não Temas' },
    { src: 'musicas/Visitação.mp3', cover: 'fotos/aba.jpg', title : 'Visitação '},
    { src: 'musicas/Y2meta.app - Nunca Pare de Lutar (128 kbps).mp3', cover: 'fotos/guerra.jpg', title : 'Nunca pare de Lutar' },
    { src: 'musicas/Gerson Rufino I Eu te escolhi _DVD RECONSTRUÇÃO_ [Clipe Oficial].mp3', cover: 'fotos/10.jpg', title : 'Eu te Escolhi' },
    { src: 'musicas/X2Download.app - Calma - Álvaro Tito [COVER] Amanda Wanessa (128 kbps).mp3', cover: 'fotos/4.jpg', title : 'Calma' },
    { src: 'musicas/X2Download.app - Rugido do Leão- Nic & Rachael Billman (128 kbps).mp3', cover: 'fotos/capa.1.jpg', title : 'Rugido do Leão' },
    { src: 'musicas/X2Download.app - Glória em Glória - Nic&Rachel Billman [Som do Reino - Vol 1] (128 kbps).mp3', cover: 'fotos/caminho.jpg', title : 'De glória em glória' },
    { src: 'musicas/Testemunho Pessoal do Pr. Antônio Cirilo.mp3', cover: 'fotos/leão e cruz.jpg', title : 'testesmunho pessoal' },
    { src: 'musicas/ESTÁS AQUI _ Suzano Selmo.mp3', cover: 'fotos/passos.jpg', title : 'Estás Aqui'},
    { src: 'musicas/14 O BOM SAMARITANO.mp3', cover: 'fotos/ungindo.jpg', title : 'o bom samaritano'},
    { src: 'musicas/10 Ousado Amor.mp3', cover: 'fotos/amor.jpg', title : 'ousado amor'},
    
];

let currentTrackIndex = 0;
let isPlaying = false;

function loadTrack(index) {
    audioPlayer.src = tracks[index].src;
    albumCover.src = tracks[index].cover;
    currentTrackDisplay.textContent = `Tocando: ${tracks[index].title}`;
}

function playPauseTrack() {
    if (isPlaying) {
        audioPlayer.pause();
        playButton.textContent = ' Play';
    } else {
        audioPlayer.play();
        playButton.textContent = ' Pause';
    }
    isPlaying = !isPlaying;
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    if (isPlaying) {
        audioPlayer.play();
    }
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    if (isPlaying) {
        audioPlayer.play();
    }
}

playButton.addEventListener('click', playPauseTrack);
nextButton.addEventListener('click', nextTrack);
prevButton.addEventListener('click', prevTrack);

// Carrega a primeira música ao abrir
loadTrack(currentTrackIndex);
document.addEventListener("DOMContentLoaded", function() {
    const audioPlayer = document.getElementById('audio-player');
    const volumeSlider = document.getElementById('volume-slider');

    // Ajusta o volume do áudio conforme o controle deslizante é movido
    volumeSlider.addEventListener('input', function() {
        audioPlayer.volume = volumeSlider.value; // Define o volume de acordo com o valor do controle
    });

    function playNextTrack() {
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length; // Incrementa o índice e volta ao início se necessário
        loadTrack(currentTrackIndex); // Carrega a próxima música
        audioPlayer.play(); // Toca a música
    }
    
    // Adiciona o evento para tocar a próxima música automaticamente quando a atual terminar
    audioPlayer.addEventListener('ended', playNextTrack);
    








});
