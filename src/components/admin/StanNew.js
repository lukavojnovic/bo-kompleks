import axios from "../../axios";
import { Formik, Form } from "formik"
import { useHistory } from "react-router-dom"
import AdminNavbar from "./AdminNavbar"
import { useQuery } from "react-query";
import { KAT_MAP } from "../../constants/constant";
import SelectComponent from "../SelectComponent"
import SelectKatComponent from "../SelectKatComponent";

    // "sifra": "A5",
    // "kat": "KAT_2",
    // "kvadratura": 60,
    // "brojSoba": 6,
    // "dostupnost": "DOSTUPAN",
    // "zgradaId": 3

const StanNew = () => {

    const array = Array.from(KAT_MAP, ([id, naziv]) => ({ id, naziv }));
    const history = useHistory();

    const onSubmit = async (values) => {
        try {
            // console.log(JSON.stringify({...values}))
            const response = await axios.post("/stanovi", {...values});
            if (response) {
                alert("Stan je uspješno dodan.");
                history.push("/admin")
            }
        } catch {
            alert("Došlo je do pogreške.");
        }
    }

    const { data, isLoading } = useQuery('zgrade', () => axios.get(`/zgrade`));

    if (isLoading) {
        return (<p>Loading....</p>)
    }

    return (
        <>
            <AdminNavbar />
            <Formik
                initialValues={{
                    
                }}
                onSubmit={onSubmit}>
                {({ handleChange }) => (
                    <Form className="max-w-lg mx-auto mt-10 bg-gray-50 p-5 rounded shadow">
                        <h1 className="text-gray-500 text-3xl text-center font-light mb-3">Novi stan</h1>

                        <input
                            type="text"
                            name="sifra"
                            onChange={handleChange}
                            className="mb-2 rounded-lg flex-1 appearance-none w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600"
                            placeholder="Šifra stana"
                            required
                        />
                        <input
                            type="number"
                            min="0"
                            name="brojSoba"
                            onChange={handleChange}
                            className="mb-2 rounded-lg flex-1 appearance-none w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600"
                            placeholder="Broj soba"
                            required
                        />
                        <input
                            type="number"
                            min="0"
                            name="kvadratura"
                            onChange={handleChange}
                            className="mb-2 rounded-lg flex-1 appearance-none w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600"
                            placeholder="Kvadratura"
                            required
                        />

                        <SelectComponent
                            className="mb-2 rounded-lg flex-1 appearance-none w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600"
                            name="zgradaId" 
                            options={data.data}
                            firstOption="Odabir zgrade"
                            onChange={handleChange}
                        />
                        <select
                            name="dostupnost"
                            onChange={handleChange}
                            className="mb-2 rounded-lg flex-1 appearance-none w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600"
                        >   
                            <option value="" label="Odabir dostupnosti" />
                            <option value="DOSTUPAN" label="Dostupan" />
                            <option value="NEDOSTUPAN" label="Nedostupan" />
                            <option value="REZERVIRAN" label="Rezerviran" />
                        </select>
                        <SelectComponent
                            className="mb-2 rounded-lg flex-1 appearance-none w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600"
                            name="kat" 
                            options={array}
                            firstOption="Odabir kata"
                            onChange={handleChange}
                        />

                        <input type="submit" value="Potvrdi"
                            className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white transition ease-in duration-200 text-center text-base font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 " />

                    </Form>
                )}
            </Formik>
        </>
    );
}

export default StanNew;