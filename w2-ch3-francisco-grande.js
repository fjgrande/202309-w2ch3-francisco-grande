const songs = [
  {
    id: 1,
    title: "La Gasolina",
    singer: "daddy",
    gender: "reggaeton",
    duration: 180,
    year: 2000,
    peto: "si",
  },

  {
    id: 2,
    title: "atrevete",
    singer: "residente",
    gender: "reggaeton",
    duration: 200,
    year: 2005,
    peto: "si",
  },

  {
    id: 3,
    title: "resistire",
    singer: "duo dinamico",
    gender: "pachanga",
    duration: 500,
    year: 1970,
    peto: "si",
  },
  {
    id: 4,
    title: "beat it",
    singer: "michael jackson",
    gender: "pop",
    duration: 350,
    year: 1982,
    peto: "si",
  },
  ,
  {
    id: 5,
    title: "superman",
    singer: "eminem",
    gender: "rap",
    duration: 280,
    year: 2002,
    peto: "no",
  },
  {
    id: 6,
    title: "lolo",
    singer: "dr Dre",
    gender: "rap",
    duration: 290,
    year: 2001,
    peto: "no",
  },
];
const AddSong = (song) => songs.push(song);

const newSong = {
  id: 7,
  title: "lalala",
  singer: "Snoop",
  gender: "rap",
  duration: 310,
  year: 1990,
  peto: "si",
};

const deleteTitle = (title) => songs.filter((song) => song.title !== title);

const returnSong = (title) => songs.filter((song) => song.title == title);

const songForGender = (song, gender) => songs.filter(song.gender === gender);

const ageOfdebut = (songs) =>
  songs.toSorted((songA, songB) => songA.year - songB.year);
