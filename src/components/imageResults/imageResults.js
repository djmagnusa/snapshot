import React from 'react';
import PropTypes from 'prop-types';
import { ImageList, ImageListItem } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Zoom from '@mui/material/Zoom';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';

class ImageResults extends React.Component{
    
    state={
        open: false,
        currentImg: ''
    }

    handleOpen=img=>{
        this.setState({open: true, currentImg: img})
    }

    handleClose=()=>{
        this.setState({open:false});
    }

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
                            <IconButton onClick={() => this.handleOpen(img.largeImageURL)}>
                                <Zoom color="white" />
                            </IconButton>
                        }
                        >
                        <img src={img.largeImageURL} alt=" " />
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

        const actions=[
            <Button label="Close" primary={true} onClick={this.handleClose} />
        ]

        return(
            <div style={{marginLeft: 50, marginRight:50, marginTop:20}}>
                {imageList}
            <Dialog
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
            >

            <img src={this.state.currentImg} alt="" style={{width:'100%'}} />
            </Dialog>
            </div>
        )
    }

}

ImageResults.propTypes = {
    images: PropTypes.array.isRequired
}

export default ImageResults;