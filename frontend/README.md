
 {userInfo.isAdmin &&(
                  <Link to = '/admin/movies' className='dropdowm-item'>Movies</Link>)}

                            {/*
          <div>
            {movie?.moviename}
          </div> 
          <div>
            {movie?.category}
          </div>
          <div>
            {movie?.hero}
          </div>
          <div>
            {movie?.heroine}
          </div>
          <div>
            {movie?.director}
          </div>
          <div>
            {movie?.price}
          </div>
            */}
             <Carousel>
        {movies?.map((movie) => (
        <Carousel.Item key={movie._id}>
          <Card className="text-center">
            <Card.Img variant="top" src={movie?.image} style={{ width: '8rem', margin: '0 auto' }} />
          </Card>
        </Carousel.Item>
      ))}
        </Carousel>


Frontend:
npm install react-bootstrap bootstrap
npm install react-multi-carousel --save
npm i react-redux react-router react-slick react-toastify slick-carousel axios flowbite @reduxjs/toolkit react-icons react-router-dom



backend:----> on whole project installation
git init
npm create vite@latest frontend --template
npm i multer nodemon --save-dev @types/bcryptjs formidable
changes to proxy in vite.config.js
chnages to package.json