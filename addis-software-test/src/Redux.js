//  import { configureStore, createSlice } from '@reduxjs/toolkit' 

// const counterSlice = createSlice({
//     name: 'counter', 
//     initialState : {
//         value: 0
//     }, 
//     reducers: {
//         increment: x => {
//             x.value += 1;
//         }, 
//         decreament: y => {
//             y.value -= 1;
//         }
//     }
// })

// export const {increment, decreament} = counterSlice.actions;

// const store = configureStore({
//   reducer: configureStore.reducer;   
// })

// store.dispatch(increment)













import { css } from '@emotion/css';

export const styles = {
  
  container: css`
    font-family: 'Arial', sans-serif;
    text-align: center;
    background-color: #f4f4f4;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  `,
  title: css`
    color: #333;
    font-size: 2em;
    margin-bottom: 20px;
  `,
  subTitle: css`
    color: #666;
    font-size: 1.5em;
    margin-bottom: 15px;
  `,
  paragraph: css`
    color: #777;
    font-size: 1em;
  `,
  inputStyle: css`
    margin: 5px 0;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
  `,

  buttonStyle: css`
    margin: 5px 0;
    padding: 8px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  `, 
  formStyle: css`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: 10px 0;

  `,
  
  listStyle : css`
    list-style: none;
    padding: 0;
    margin: 20px 0;
  `,

  itemStyle : css`
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
  `, 

  navStyle : css`
    background-color: #333;
    color: white;
    margin: 0;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  nav_center : css`
    display: flex;
    align-items: center;
  `, 
    
  nav_container: css` {
    display: flex;
    align-items: center;
  `,

  amount_container: css`
    margin-left: 1rem;
  `,

  h4style : css`
    margin: 0;
    color: white;
  `,
  h5style: css`
    margin: 0;
    color: white;
    cursor: pointer;
    
    &:hover {
      color: #ddd;
    }
  `, 
  logo : css`
    width: 40px;
    height: 40px;
    margin-right: 10px;
    `
  }