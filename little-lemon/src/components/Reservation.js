import Breadcrumb from "react-bootstrap/Breadcrumb";
import {useEffect, useState} from "react";
import {fetchAPI, submitAPI} from "./api.js";
import {useNavigate} from "react-router-dom";
import * as Yup from "yup";
import {useFormik} from "formik";
import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
  } from "@chakra-ui/react";

function Reservation(props) {

    const {dispatch, state} = props;
    const [times, setTimes] = useState([]);
    const navigate = useNavigate();
    const clearForm = () => {
        dispatch({type: 'clear', payload: ''});
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            guests: 0,
            occasion: "None",
            date: "",
            time: ""
        },

        onSubmit: (values) => {
            submitAPI(values);
            console.log(values);
            submitForm(values);
            clearForm();
            formik.resetForm()
        },

        validationSchema: Yup.object({
            name: Yup.string().min(3, "Must be 3 characters or more").required("Your name is required to hold a reservation"),
            email: Yup.string().email("Invalid email address"),
            phone: Yup.number().required("We are able to contact you if you provide a phone number"),
            guests: Yup.number().required("Please select the number of guests"),
            occasion: Yup.string(),
            date: Yup.date().required("Please enter the date"),
            time: Yup.string().required("Please enter the time")
        }),
    });

    const submitForm = (state) => {
        if (submitAPI(state) === true) {
            navigate("/confirmation");
            console.log("Form submitted!");
        }
    }

    useEffect(() => {state.date && setTimes(fetchAPI(state.date))}, [JSON.stringify(state.date)]);

    return (
            <div style={{ textAlign: "center", margin: "0px 290px"}}>
                <Breadcrumb className="breadcrumb">
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active style={{fontWeight: "bold"}} >Guest Details</Breadcrumb.Item>
                    <Breadcrumb.Item href="/confirmation">Confirmation</Breadcrumb.Item>
                </Breadcrumb>
                <h1 style={{ color: "#333333", marginTop: "40px" }}>Reserve a Table Now:</h1>
                <h2 style={{ color: "#333333"}}>Please fill in the information below to reserve a table at the Little Lemon Restaurant.</h2>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl isInvalid={!!formik.errors.name && formik.touched.name}>
                        <FormLabel htmlFor="name" style={{display: "flex", marginTop: "60px"}}>Name: </FormLabel>
                        <Input
                            value={state.name}
                            onChange={(e) => {
                                dispatch({ type: 'name', payload: e.target.value });
                            }}
                            type="text"
                            name="name"
                            id="name"
                            {...formik.getFieldProps("name")}
                            placeholder="Please tell us your name here"
                            style={{
                                display: "flex",
                                width: "1100px",
                                height: "40px",
                                background: "#EDEFEE",
                                borderRadius: "16px",
                                borderColor: "#333333"
                                }}/>
                        <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                        <FormLabel htmlFor="email" style={{display: "flex", marginTop: "45px"}}>Email: </FormLabel>
                        <Input
                            value={state.email}
                            onChange={(e) => {
                                dispatch({ type: 'email', payload: e.target.value });
                            }}
                            type="text"
                            name="email"
                            id="email"
                            {...formik.getFieldProps("email")}
                            placeholder="Email - eg. name@example.com"
                            style={{
                                display: "flex",
                                width: "1100px",
                                height: "40px",
                                background: "#EDEFEE",
                                borderRadius: "16px",
                                borderColor: "#333333"
                                }}/>
                        <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!formik.errors.phone && formik.touched.phone}>
                        <FormLabel htmlFor="phone" style={{display: "flex", marginTop: "45px"}}>Phone: </FormLabel>
                        <Input
                            value={state.phone}
                            onChange={(e) => {
                                dispatch({ type: 'phone', payload: e.target.value });
                            }}
                            type="phone"
                            name="phone"
                            id="phone"
                            {...formik.getFieldProps("phone")}
                            placeholder="Please let us know your phone number here"
                            style={{
                                display: "flex",
                                width: "1100px",
                                height: "40px",
                                background: "#EDEFEE",
                                borderRadius: "16px",
                                borderColor: "#333333"
                                }}/>
                        <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
                    </FormControl>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                        <div>
                            <FormControl isInvalid={!!formik.errors.guests && formik.touched.guests}>
                                <FormLabel htmlFor="guests" style={{display: "flex", marginTop: "45px"}}>Number of guests:</FormLabel>
                                    <Input
                                        value={state.guests}
                                        onChange={(e) => {
                                            dispatch({ type: 'guests', payload: e.target.value });
                                        }}
                                        type="number"
                                        min="1"
                                        max="10"
                                        id="guests"
                                        {...formik.getFieldProps("guests")}
                                        style={{
                                            display: "flex",
                                            width: "400px",
                                            height: "40px",
                                            background: "#EDEFEE",
                                            borderRadius: "16px",
                                            borderColor: "#333333"
                                        }}
                                    />
                                <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={!!formik.errors.occasion && formik.touched.occasion}>
                                <FormLabel htmlFor="occasion" style={{display: "flex", marginTop: "45px"}}>Occasion:</FormLabel>
                                    <select
                                        value={state.occasion}
                                        onChange={(e) => {
                                            dispatch({ type: 'occasion', payload: e.target.value });
                                        }}
                                        id="occasion"
                                        style={{
                                            display: "flex",
                                            width: "400px",
                                            height: "40px",
                                            background: "#EDEFEE",
                                            borderRadius: "16px",
                                            borderColor: "#333333"
                                        }}>
                                        <option>None</option>
                                        <option>Birthday</option>
                                        <option>Anniversary</option>
                                    </select>
                                <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
                            </FormControl>
                        </div>
                        <div>
                            <FormControl isInvalid={!!formik.errors.date && formik.touched.date}>
                                <FormLabel htmlFor="res-date" style={{display: "flex", marginTop: "45px"}}>Choose date:</FormLabel>
                                    <Input
                                        value={state.date}
                                        onChange={(e) => {
                                            dispatch({ type: 'date', payload: e.target.value });
                                        }}
                                        type="date"
                                        id="res-date"
                                        style={{
                                            display: "flex",
                                            width: "400px",
                                            height: "40px",
                                            background: "#EDEFEE",
                                            borderRadius: "16px",
                                            borderColor: "#333333"
                                    }}/>
                                <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={!!formik.errors.time && formik.touched.time}>
                                <FormLabel htmlFor="res-time" style={{display: "flex", marginTop: "45px"}}>Choose time:</FormLabel>
                                    <select
                                        value={state.time}
                                        onChange={(e) => {
                                            dispatch({ type: 'time', payload: e.target.value });
                                        }}
                                        id="res-time"
                                        style={{
                                            display: "flex",
                                            width: "400px",
                                            height: "40px",
                                            background: "#EDEFEE",
                                            borderRadius: "16px",
                                            borderColor: "#333333"
                                    }}>
                                        {times.map((time) => (<option key={time} value={time}>{time}</option>))}
                                    </select>
                                <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
                            </FormControl>
                        <Button
                            type="submit"
                            value="Make Your reservation"
                            style={{
                                marginTop: "45px",
                                marginBottom: "45px",
                                justifyItems: "end",
                                height: "50px",
                                width: "250px",
                                }}>
                                    Make Your Reservation
                                    </Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Reservation;