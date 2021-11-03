import React from 'react';
import PropTypes from 'prop-types';
import { ImageList, ImageListItem } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Zoom from '@mui/material/Zoom';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';

class ImageResults extends React.Component{
    render()
    {
        let imageList;
        const {images}=this.props

        if(images)
        {
            imageList=(
                <ImageList cols={4}>
                {
                    images.map(img=>(
                        <ImageListItem
                        title={img.tags}
                        key={img.id}
                        actionIcon={
                            <IconButton>
                                <Zoom color="white" />
                            </IconButton>
                        }
                        >
                        <img src="{img.largeImageUrl} alt" />
                        </ImageListItem>
                    ))
                }
                </ImageList>
            )
        }

        else
        {
            imageList = null;
        }

        return(
            <div>
                <ImageList />
            </div>
        )
    }

}

ImageResults.propTypes = {
    images: PropTypes.array.isRequired
}

export default ImageResults;