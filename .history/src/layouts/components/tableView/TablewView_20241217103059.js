// src/components/TableView.js
import React from "react";
import TableRowItem from "./TableRowItem";
import { v4 as uuidv4 } from "uuid";

const TablewView = (props) => {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">№</th>
                    <th scope="col">ФИО</th>
                    <th scope="col">Телефон</th>
                    <th scope="col">Заметки</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((item) => (
                    <TableRowItem
                        key={uuidv4()}
                        contact={item}
                        removeContact={props.removeContact}
                    />
                ))}
            </tbody>
        </table>
    );
};
export default TablewView;
