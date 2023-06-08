import React, { Component } from "react";
import  Accordion from "react-bootstrap/Accordion";
class ClassAccd extends Component {
    render(){
        return(
            <Accordion>
    <Accordion.Item>
        <Accordion.Header> Prabhas </Accordion.Header>
        <Accordion.Body>
            <p>
        Uppalapati Venkata Suryanarayana Prabhas Raju (born 23 October 1979), known mononymously as Prabhas
        , is an Indian actor who predominantly works in Telugu cinema. One of the highest-paid actors in Indian cinema,/n
         Prabhas has featured in Forbes India's Celebrity 100 list three times since 2015 based on his income and popularity./n 
         He has received seven Filmfare Awards South nominations and is a recipient of a Nandi Award and a SIIMA Award.
         </p>
        </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item>
        <Accordion.Header>Early life and education</Accordion.Header>
        <Accordion.Body>
            <p>
            Prabhas was born in a Telugu family to film producer Uppalapati Surya Narayana Raju and Siva Kumari. The youngest of the three children, he has a 
            brother, Prabodh and a sister, Pragathi.He is the nephew of Telugu film actor Krishnam Raju.His family hails 
            from Mogalthur, near Bhimavaram of West Godavari district, Andhra Pradesh.

            Prabhas did his schooling at Don Bosco Matriculation Higher Secondary School, Chennai, and at DNR High School, Bhimavaram.
             He then completed his intermediate education from Nalanda College, Hyderabad. He is also an alumnus of Satyanand Film Institute, Visakhapatnam.
             </p>
        </Accordion.Body>
    </Accordion.Item>
</Accordion>
        )
    }
}

export default ClassAccd;