import React from "react";

const TableRowItem = (props) => {
    const removeRow = () => props.removeContact(props.contact.id);
    return (
        <tr>
            <th scope="row">{props.contact.id}</th>
            <th>{props.contact.fullName}</th>
            <th>{props.contact.phone}</th>
            <th>{props.contact.notes}</th>
            <th>
                {" "}
                <button type="button" onClick={removeRow}>
                    Удалить
                </button>
            </th>
        </tr>
    );
};

export default TableRowItem;
