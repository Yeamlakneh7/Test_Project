import React from 'react'
import { styles } from './Emotions'

function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.song_list}>
        <div className={styles.song_items}>
            <div className={styles.song_title}>
                <p>Ezemralehu</p>
            
                <div className={styles.song_artist}>
                Song by Artist me.
                </div>
            </div>
            <div className={styles.song_title}>
                <p>Ezemralehu</p>
            
                <div className={styles.song_artist}>
                Song by Artist me.
                </div>
            </div>
        </div>
        

      </div>
      {/* <div className={styles.song-form}></div> */}

    </div>
  )
}

export default Main
