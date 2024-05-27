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
  buttonStyle2 : css`
    margin-left: auto;
    padding: 5px 10px;
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
  listStyle2 : css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px;
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
    text-decoration: none;

    &:hover {
      color: #ddd;
    }
  `, 
  logo : css`
    width: 50px;
    height: 50px;
  `,

  cardStyle : css`
    width: 200px;
    margin: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
`, 

  image : css`
    width: 100%;
    height: 200px;
    object-fit: cover;
`,
  infoStyle: css`
    padding: 10px;
    text-align: center;
  `,
  

  // for details
  detailsContainerStyle: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  `,

  imageStyle : css`
    height: 300px;
    width: 300px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 20px;
  `,

  titleStyle : css`
    font-size: 24px;
    font-weight: bold;
    color: #333;
  `,

  artistStyle : css`
    font-size: 18px;
    color: #555;
  `
  }