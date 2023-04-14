import React, {useState}    from 'react';
import {Form,Button} from 'react-bootstrap';
import {v4 as uuidv4} from 'uuid';

const BookForm = (props) => {
    const [book,setBook] = useState({
        bookname:props.book ? props.book.bookname : '',
        author: props.book ? props.book.author : '',
        quantity: props.book ? props.book.quantity : '',
        price: props.book ? props.book.price : '',
        date : props.book ? props.book.date : '',
    });
    const [error,setError] = useState('');
    const {bookname,author,price,quantity} = book;

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const values = [bookname,author,price,quantity];
        let error = '';

        const allFieldsFilled = values.every((field) => {
            const value = `${field}`.trim();
            return value !== '' && value !== '0';
        });
        if (allFieldsFilled){
            const book = {
                id: uuidv4(),
                bookname,
                author,
                price,
                quantity,
                date: new Date()
            };
            props.handleOnSubmit(book);
        } else {
            error = "Please make sure all fields are filled out.";
        }
        setError(error);
    };

    const handleInputChange = (event) => {
        const {name,value} = event.target;
        switch (name) {
            case 'quantity':
                if (value === '' || parseInt(value) === +value) {
                    setBook((prevState) => ({
                        ...prevState,
                        [name]: value
                    }));
                }
                break;
            case 'price':
                if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
                    setBook((prevState) => ({
                        ...prevState,
                        [name]: value
                    }));
                }
                break;
            default:
                setBook((prevState) => ({
                    ...prevState,
                    [name]: value
                }));
        }
    };
    return (
        <div className="main-form">
            {error && <p className="errorMsg">{error}</p>}
            <Form onSubmit={handleOnSubmit}>
                <Form.Group controlId="name">
                    <Form.Label>Book Name</Form.Label>
                    <Form.Control
                    className = "input-control"
                    type="text"
                    name="bookname"
                    value={bookname}
                    placeholder="Enter Book Name"
                    onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="author">
                    <Form.Label>Author</Form.Label>
                    <Form.Control
                    className = "input-control"
                    type="text"
                    name="author"
                    value={author}
                    placeholder="Enter Author's Name"
                    onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="quantity">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                    className = "input-control"
                    type= "number"
                    name="quantity"
                    value={quantity}
                    placeholder="Enter Quantity"
                    onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                    className = "input-control"
                    type="text"
                    name="price"
                    value={price}
                    placeholder="Enter Price"
                    onChange={handleInputChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className='submit-btn'>
                    Submit
                </Button>
            </Form>
        </div>
    );
};
export default BookForm;

                


