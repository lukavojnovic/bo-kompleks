import { Form, Formik } from "formik";
import axios from "../../axios";
import { useHistory } from "react-router";
import AdminNavbar from "./AdminNavbar";

const ZgradaNew = () => {
    const history = useHistory();

    const onSubmit = async (values) => {
        try {
            const response = await axios.post("/zgrade", { ...values });

            if (response) {
                alert("Zgrada uspješno dodana.");
                history.push("/admin/zgrade");
            }
        } catch {
            alert("Došlo je do pogreške.");
        }
    };

    return <>
        <AdminNavbar />
        <div className="py-8 px-8 flex justify-center items-center">
            <Formik initialValues={{}} onSubmit={onSubmit}>
                {({ handleChange }) => (
                    <Form className="max-w-lg mx-auto mt-10 bg-gray-50 p-5 rounded shadow">
                        <h1 className="text-gray-500 text-3xl text-center font-light mb-3">Nova zgrada</h1>

                        <input type="text" name="naziv" onChange={handleChange}
                            className="mb-2 rounded-lg flex-1 appearance-none w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600"
                            placeholder="Naziv zgrade" required />
                        <input type="text" name="adresa" onChange={handleChange}
                            className="mb-2 rounded-lg flex-1 appearance-none w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600"
                            placeholder="Adresa zgrade" required />
                        <div className="flex space-x-2 mt-2">
                            <input type="submit" value="Potvrdi"
                                className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white transition ease-in duration-200 text-center text-base font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 " />
                            <input type="reset" value="Poništi"
                                className="py-2 px-4  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white transition ease-in duration-200 text-center text-base font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 " />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>;
    </>
};

export default ZgradaNew;
