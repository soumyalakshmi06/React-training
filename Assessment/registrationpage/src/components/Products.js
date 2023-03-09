import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { ImageList, ImageListItem, ImageListItemBar, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}
));

const Products = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos').then((response) => response.json()).then((data) => {
        setProducts(data);
    });
  }, []);

  const handleDelete = (id) => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  };

  const handleEdit = (id) => {
    navigate.push(`/products/${id}/edit`);
  };

  const handleAdd = () => {
    navigate.push('/products/add');
  };

  return (
    <div className={classes.root}>
      <ImageList rowHeight={200} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
          <IconButton onClick={handleAdd}>
            <AddIcon />
          </IconButton>
        </ImageListItem>
        {products.map((product) => (
          <ImageListItem key={product.id}>
            <img src={product.url} alt={product.title} />
            <ImageListItemBar title={product.title} subtitle={<span>by: {product.albumId}</span>} actionIcon={
                <>
                  <IconButton aria-label={`edit ${product.title}`} className={classes.icon}
                    onClick={() => handleEdit(product.id)} >
                    <EditIcon />
                  </IconButton>

                  <IconButton aria-label={`delete ${product.title}`} className={classes.icon} 
                  onClick={() => handleDelete(product.id)}>
                    <DeleteIcon />
                  </IconButton>
                </>
              }/>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default Products;
