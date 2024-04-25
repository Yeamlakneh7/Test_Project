import { css } from '@emotion/css';

export const styles = {
  container: css`
    font-family: 'Arial', sans-serif;
    background-color: #333333;
    color: #ffffff;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    `,
  title: css`
    font-size: 2em;
    `,
  
//   subTitle: css`
//     color: #666;
//     font-size: 1.5em;
//     margin-bottom: 15px;
//   `,
//   paragraph: css`
//     color: #777;
//     font-size: 1em;
//   `, 
  img: css`
  position: relative;
  top: 0;
  left: 0;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  `,

  main: css`
    background-color: #f4f4f4;
    padding: 20;
    height: 100vh;
    `,

  song_list: css`
    background-color: #ffffff;
    border-radius: 8px;
    padding: 20px;
    margin: 20px 0;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    `,  

   song_items: css`
    background-color: #e0e0e0;
    border-radius: 4px;
    padding: 15px;
    margin: 10px 0; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px, 2px, 4px, rgba(0, 0, 0, 0.1);

    
    `, 

    song_title: css`
        font-size: 18px;
        font-weight: bold;
        color: #333333;
    `, 

    song_artist: css`
        font-size: 14px;
        color: #555555;
    `,



  footer: css`
    background-color: #333333;
    color: #ffffff;
    padding: 20px;
    text-align: center;
    `
};
