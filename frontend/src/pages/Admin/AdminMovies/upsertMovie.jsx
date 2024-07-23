import React from "react";
import {useNavigate} from 'react-router-dom';
import { useSelector } from "react-redux";
import { useState } from "react";
import {useCreateMoviesMutation, useGetMovieByIdQuery,useUploadProductImageMutation} from '../../../redux/api/movieApiSlice';
import './upsertMovie.css';
import {toast} from 'react-toastify';

const FormModal = ({show,onClose}) =>{
    if (!show) {
        return null;
      }
    
    const [moviename,setMovieName] = useState("");
    const [image,setImage] = useState("");
    const [genre,setGenre] = useState("");
    const [language,setLanguage] = useState("");
    const [description,setDescription] = useState("");
    const [hero,setHero] = useState("");
    const [heroine,setHeroine] = useState("");
    const [director,setDirector] = useState("");
    const [price,setPrice] = useState("");
    const [category,setCategory] = useState("");
    const [imageUrl,setImageUrl] = useState(null);

    const [uploadProductImage] = useUploadProductImageMutation();
    const [createMovie] = useCreateMoviesMutation();

    const uploadFileHandler = async(e)=>{
      const filedata = new FormData();
      filedata.append("image",e.target.files[0]);
      try{
        const res = await uploadProductImage(filedata).unwrap();
        toast.success(res.message);
        setImage(res.image);
        setImageUrl(res.image);
      }
      catch(error){
        toast.error(error.error);
      }
    }
    
    const handleSubmit = async(e) => {
      e.preventDefault();
      try{
        
      const movieData = new FormData();
      movieData.append("image", image);
      movieData.append("moviename", moviename);
      movieData.append("genre", genre);
      movieData.append("language", language);
      movieData.append("description", description);
      movieData.append("hero", hero);
      movieData.append("heroine", heroine);
      movieData.append("director", director);
      movieData.append("price", price);
      movieData.append("category", category);
   

      const { data } = await createMovie(movieData);
      
      if (data.error) {
        console.error(data.error)
        toast.error("Movie create failed. Try Again.");
      } else {
        toast.success(`${data.moviename} is created`);
        onClose();
        
      }
    } catch (error) {
      console.error(error);
      toast.error("Movie create failed. Try Again.");
    }
        
      };
    return(
        <div className="modal-overlay">
            <div className="modal">
            
        <div className="modal-content">
          <div className="create-movie-header">
          <h2>Create movie</h2>
          <button className="close-button" onClick={onClose}>
          &times;
        </button>
          </div>

          <form onSubmit={handleSubmit}>
            
          <div className="form-group">
            <label htmlFor="uploadFile">
              <input
                type="file"
                name = "image"
                onChange={uploadFileHandler}
                required
              />
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="moviename">Movie Name
              <input
                type="text"
                id="moviename"
                name="moviename"
                value = {moviename}
                onChange={(e)=>setMovieName(e.target.value)}
                required
              />
              </label>
              <label htmlFor="genre">Genre
              <input
                type="text"
                value = {genre}
                onChange={(e)=>setGenre(e.target.value)}
                required
              />
              </label>          
            </div>

            <div className="form-group">
            <label htmlFor="language">Language
              <input
                type="text"
                value = {language}
                onChange={(e)=>setLanguage(e.target.value)}
                required
              />
              </label>
              <label htmlFor="Category">Category
              <input
                type="text"
                value = {category}
                onChange={(e)=>setCategory(e.target.value)}
                required
              />
              </label>
            </div>

            <div className="form-group">
            <label htmlFor="description">Description
              <input
                type="text"
                value = {description}
                onChange={(e)=>setDescription(e.target.value)}
                required
              />
              </label>
            </div>

            <div className="form-group">
            <label htmlFor="hero">Hero
              <input
                type="text"
                value = {hero}
                onChange={(e)=>setHero(e.target.value)}
                required
              />
              </label>
              <label htmlFor="heroine">Heroine
              <input
                type="text"
                value = {heroine}
                onChange={(e)=>setHeroine(e.target.value)}
                required
              />
              </label>
            </div>

            <div className="form-group">
            <label htmlFor="director">Director
              <input
                type="text"
                value = {director}
                onChange={(e)=>setDirector(e.target.value)}
                required
              />
              </label>
              <label htmlFor="price">Price
              <input
                type="number"
                value = {price}
                onChange={(e)=>setPrice(e.target.value)}
                required
              />
              </label>
            </div>

            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
            </div>
        </div>
    )
}

export default FormModal;