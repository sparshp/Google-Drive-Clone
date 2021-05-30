import React from 'react'
import '../../styles/FileCard.css'

import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import { red } from '@material-ui/core/colors';

const FileCard = ({ name }) => {
    return (
        <div className='fileCard'>
            <div className="fileCard--top">
                <InsertDriveFileIcon className='sp' style={{ fontSize: 130 }}/>
            </div>

            <div className="fileCard--bottom">
                <p>{name}</p>
            </div>
        </div>
    )
}

export default FileCard