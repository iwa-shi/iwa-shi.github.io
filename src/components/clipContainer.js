const ClipLeftDown = (props) => {
    return (
        <div className='clip-shadow'>
            <div className='Block clip-leftdown'>
                {props.children}
            </div>
        </div>
    )
}

const ClipRightDown = (props) => {
    return (
        <div className='clip-shadow'>
            <div className='Block clip-rightdown'>
                {props.children}
            </div>
        </div>
    )
}

export {ClipLeftDown, ClipRightDown}