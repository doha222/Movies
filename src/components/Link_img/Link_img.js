const Link_img = (props) => {
    return (
        <>
            <img
                className="d-block w-100"
                src={props.src_img}
                alt={props.alt_img}
            />
        </>
    );
};
export default Link_img;