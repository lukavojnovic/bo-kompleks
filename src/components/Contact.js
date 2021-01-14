import Fade from 'react-reveal/Fade';
import { Form, Formik } from "formik";
import axios from "../axios";
import { useHistory } from "react-router";


function Contact() {

    const history = useHistory();

    const onSubmit = async (values) => {
        try {
            const response = await axios.post("/poruke", { ...values });

            if (response) {
                alert("Poruka je uspješno poslana!");
                history.push("/#contact");
            }
        } catch {
            alert("Došlo je do pogreške.");
        }
    };

    return (
        <div id="contact" className="h-auto md:h-screen bg-gray-100 align-middle pt-8 lg:pt-32 pb-24 md:pb-auto">
            <p className="visible lg:invisible block lg:hidden text-center text-3xl font-semibold mb-4">Kontakt</p>
            <div className="flex-none lg:flex justify-evenly">
                <Fade bottom>
                    <Formik initialValues={{}} onSubmit={onSubmit}>
                        {({ handleChange }) => (
                            <Form className="w-full max-w-sm mx-auto lg:m-0 sm:max-w-lg   p-4">
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                            Ime
                                    </label>
                                        <input type="text" name="ime" onChange={handleChange}
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            placeholder="Ime" required />
                                        {/* <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="grid-first-name"
                                            type="text"
                                            onChange={handleChange}
                                            name="ime"
                                            placeholder="Ime" /> */}
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                            Prezime
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="grid-last-name"
                                            type="text"
                                            onChange={handleChange}
                                            name="prezime"
                                            placeholder="Prezime" />
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                            E-mail
                                    </label>
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="email"
                                            type="email"
                                            onChange={handleChange}
                                            name="email"
                                            placeholder="Email" />
                                        <p className="text-gray-600 text-xs italic">Vaš E-mail je siguran u našim rukama i biti će korišten samo za slanje ove poruke.</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                            Poruka
                                    </label>
                                        <textarea
                                            className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                                            id="message"
                                            name="poruka"
                                            onChange={handleChange}
                                            placeholder="Poruka"></textarea>
                                    </div>
                                </div>
                                <div className="md:flex md:items-center">
                                    <div className="md:w-1/3">
                                        <input
                                            className="shadow bo-bg-red focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                            type="submit" value="Pošalji"/>
                                            
                                    
                                    </div>
                                    <div className="md:w-2/3"></div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </Fade>
                <Fade bottom>
                    <div className="invisible lg:visible hidden lg:block">
                        <p className="text-center text-3xl font-semibold pt-16 mb-4">Imate li pitanje?</p>
                        <p className="text-center text-xl font-semibold pt-16 mb-4">kontaktirajte nas putem E-maila</p>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Contact;