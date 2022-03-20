const music = new Audio('audios/1.mp3')

const songs = [
  {
    id: '1',
    songName: 'I Love You <div class="subtitle">Billie Eilish</div>'
  },
  {
    id: '2',
    songName: 'I Wanna Be Yours <div class="subtitle">Arctic Monkeys</div>'
  },
  {
    id: '3',
    songName: 'Believer <div class="subtitle">Imagine Dragons</div>'
  },
  {
    id: '4',
    songName: 'Slow Dancing In The Dark <div class="subtitle">Joji</div>'
  },
  {
    id: '5',
    songName: 'Good 4 u <div class="subtitle">Olivia Rodrigo</div>'
  },
  {
    id: '6',
    songName: 'Bohemian Rhapsody <div class="subtitle">Queen</div>'
  },
  {
    id: '7',
    songName: 'Easy Of Me <div class="subtitle">Adele</div>'
  },
  {
    id: '8',
    songName: 'My Universe <div class="subtitle">ColdPlay & Bts</div>'
  },
  {
    id: '9',
    songName: 'Bad Habits <div class="subtitle">Ed Sheeran</div>'
  },
  {
    id: '10',
    songName: 'Stay <div class="subtitle">The Kid Laroi</div>'
  },
  {
    id: '11',
    songName: 'Shivers <div class="subtitle">Ed Sheeran</div>'
  },
  {
    id: '12',
    songName: 'Abcdefu <div class="subtitle">Gayle</div>'
  },
  {
    id: '13',
    songName: 'Say So <div class="subtitle">Doja Cat/div>'
  },
  {
    id: '14',
    songName: 'Blinding Lights <div class="subtitle">The Weeknd</div>'
  },
  {
    id: '15',
    songName: 'Dance Monkey <div class="subtitle">Tones and I</div>'
  },
  {
    id: '16',
    songName: 'Golden <div class="subtitle">Harry Styles</div>'
  },
  {
    id: '17',
    songName: 'Positions <div class="subtitle">Ariana Grande</div>'
  },
  {
    id: '18',
    songName: 'Memories <div class="subtitle">Maroon 5</div>'
  },
  {
    id: '19',
    songName: 'Medicine <div class="subtitle">James Arthur</div>'
  },
  {
    id: '20',
    songName: 'Physical <div class="subtitle">Dua Lipa</div>'
  },
  {
    id: '21',
    songName: 'WAP <div class="subtitle">Cardi B</div>'
  },
  {
    id: '22',
    songName: 'Blind <div class="subtitle">Jordyn Jones</div>'
  },
  {
    id: '23',
    songName: 'Bad Guy <div class="subtitle">Billie Eilish</div>'
  },
  {
    id: '24',
    songName: 'Bad Liar <div class="subtitle">Imagine Dragons</div>'
  },
  {
    id: '25',
    songName: '7 Rings <div class="subtitle">Ariana Grande</div>'
  },
  {
    id: '26',
    songName: 'Nervous <div class="subtitle">Shawn Mendes</div>'
  },
]



let masterPlay = document.getElementById('masterPlay')

masterPlay.addEventListener('click', () => {
  if (music.paused || music.currentTime <= 0) {
    music.play()
    masterPlay.classList.remove('fa-play')
    masterPlay.classList.add('fa-pause')
    music.addEventListener('ended', () => {
      masterPlay.classList.add('fa-play')
      masterPlay.classList.remove('fa-pause')
    })
  } else {
    music.pause()
    masterPlay.classList.remove('fa-pause')
    masterPlay.classList.add('fa-play')
    
    
      makeAllBackground();
      Array.from(document.getElementsByClassName('song-item'))[`${index-1}`].style.background = 'rgb(105, 105, 170, .0'

  }
  makeAllBackground();
  Array.from(document.getElementsByClassName('song-item'))[`${index-1}`].style.background = 'rgb(105, 105, 170, .0'
})


const makeAllPlays = () => {
  Array.from(document.getElementsByClassName('playlist-play')).forEach((element)=> {
      element.classList.add('fa-play')
      element.classList.remove('fa-pause')
  })
}
const makeAllBackground = () => {
  Array.from(document.getElementsByClassName('song-item')).forEach((element)=> {
      element.style.background = 'rgb(105, 105, 170, 0'
  })
}



let index = 0
let poster_master_play = document.getElementById('poster_master_play')
let title = document.getElementById('title')

Array.from(document.getElementsByClassName('playlist-play')).forEach((element) => {
  element.addEventListener('click', (e)=> {
    index = e.target.id;
    makeAllPlays()
    e.target.classList.remove('fa-play')
    e.target.classList.add('fa-pause')
    music.src = `audios/${index}.mp3`
    poster_master_play.src = `images/${index}.jpg`
    music.play()

    let song_title = songs.filter((ele) => {
      return ele.id == index
    })

    song_title.forEach(ele => {
      let {songName} = ele
      title.innerHTML = songName
    })

    masterPlay.classList.add('fa-pause')
    masterPlay.classList.remove('fa-play')


    makeAllBackground();
    Array.from(document.getElementsByClassName('song-item'))[`${index-1}`].style.background = 'rgb(105, 105, 170, .1'
  })
})

let currentStart = document.getElementById('current-start')
let currentEnd = document.getElementById('current-end')
let seek = document.getElementById('seek')
let bar2 = document.getElementById('bar2')
let dot = document.getElementsByClassName('dot')[0]

music.addEventListener('timeupdate', () => {
  let music_curr = music.currentTime
  let music_dur = music.duration

  let min = Math.floor(music_dur/60)
  let sec = Math.floor(music_dur%60)

  if (sec < 10) {
    sec= `0${sec}`
  }

  currentEnd.innerText = `${min}:${sec}`

  let min1 = Math.floor(music_curr/60)
  let sec1 = Math.floor(music_curr%60)

  if (sec1 < 10) {
    sec1= `0${sec1}`
  }


  currentStart.innerText = `${min1}:${sec1}`

  let progressbar = parseInt((music.currentTime/music.duration)*100)
  seek.value = progressbar
  let seekbar = seek.value
  bar2.style.width = `${seekbar}%`
  dot.style.left = `${seekbar}%`
})

seek.addEventListener('change', () => {
  music.currentTime = seek.value * music.duration/100
})

music.addEventListener('ended', () => {
    masterPlay.classList.remove('fa-pause')
    masterPlay.classList.add('fa-play')
    
})


let vol = document.getElementById('vol')
let vol_icon = document.getElementById('vol-icon')
let vol_dot = document.getElementById('vol-dot')
let vol_bar = document.getElementsByClassName('vol-bar')[0]

vol.addEventListener('change', () => {
  if (vol.value <= 0) {
    vol_icon.classList.remove('fa-music')
    vol_icon.classList.add('fa-volume-xmark')
    vol_icon.classList.remove('fa-volume-low')
    vol_icon.classList.remove('fa-volume-high')

  }
  if (vol.value > 0) {
    vol_icon.classList.remove('fa-music')
    vol_icon.classList.remove('fa-volume-xmark')
    vol_icon.classList.add('fa-volume-low')
    vol_icon.classList.remove('fa-volume-high')
  }
  if (vol.value > 50) {
    vol_icon.classList.remove('fa-music')
    vol_icon.classList.remove('fa-volume-xmark')
    vol_icon.classList.add('fa-volume-low')
    vol_icon.classList.remove('fa-volume-high')
  }
  if (vol.value > 70) {
    vol_icon.classList.remove('fa-music')
    vol_icon.classList.remove('fa-volume-xmark')
    vol_icon.classList.remove('fa-volume-low')
    vol_icon.classList.add('fa-volume-high')
  }

  let vol_a = vol.value
  vol_bar.style.width = `${vol_a}%`
  vol_dot.style.left = `${vol_a}%`
  music.volume = vol_a/100
})

let back = document.getElementById('back')
let next = document.getElementById('next')

back.addEventListener('click',() => {
  index -= 1;
  if (index < 1) {
    index = Array.from(document.getElementsByClassName('song-item')).length
  }
  music.src = `audios/${index}.mp3`
  poster_master_play.src = `images/${index}.jpg`
  music.play()

  let song_title = songs.filter((ele) => {
    return ele.id == index
  })

  song_title.forEach(ele => {
    let {songName} = ele
    title.innerHTML = songName
  })
  makeAllPlays()
  document.getElementById(`${index}`).classList.add('fa-pause')
  document.getElementById(`${index}`).classList.remove('fa-play')
  
  makeAllBackground();
  Array.from(document.getElementsByClassName('song-item'))[`${index-1}`].style.background = 'rgb(105, 105, 170, .1'
})

next.addEventListener('click',() => {
  index -= 0;
  index += 1;
  if (index > Array.from(document.getElementsByClassName('song-item')).length) {
    index = 1
  }
  music.src = `audios/${index}.mp3`
  poster_master_play.src = `images/${index}.jpg`
  music.play()

  let song_title = songs.filter((ele) => {
    return ele.id == index

  })

  song_title.forEach(ele => {
    let {songName} = ele
    title.innerHTML = songName
  })
  makeAllPlays()
  document.getElementById(`${index}`).classList.add('fa-pause')
  document.getElementById(`${index}`).classList.remove('fa-play')

  makeAllBackground();
  Array.from(document.getElementsByClassName('song-item'))[`${index-1}`].style.background = 'rgb(105, 105, 170, .1'
  
})

let left_scroll = document.getElementById('left-scroll')
let right_scroll = document.getElementById('right-scroll')
let pop_song = document.getElementsByClassName('pop-content')[0]

left_scroll.addEventListener('click', () => {
  pop_song.scrollLeft -= 330
})

right_scroll.addEventListener('click', () => {
  pop_song.scrollLeft += 330
})
let left_scroll2 = document.getElementById('left-scroll2')
let right_scroll2 = document.getElementById('right-scroll2')
let dois = document.getElementsByClassName('dois')[0]

left_scroll2.addEventListener('click', () => {
  dois.scrollLeft -= 330
})

right_scroll2.addEventListener('click', () => {
  dois.scrollLeft += 330
})

let left_scrolls = document.getElementById('left-scrolls')
let right_scrolls = document.getElementById('right-scrolls')
let item = document.getElementsByClassName('item')[0]

left_scrolls.addEventListener('click', () => {
  item.scrollLeft -= 330
})

right_scrolls.addEventListener('click', () => {
  item.scrollLeft += 330
})
