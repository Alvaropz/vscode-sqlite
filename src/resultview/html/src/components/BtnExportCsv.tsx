import * as React from "react";
import { Button, Icons } from './Base';

interface Props {
    onClick?: () => void;
}


const BtnExportCsv: React.FunctionComponent<Props> = (props) => {
    return (
        <Button background="transparent" title="Export CSV" width={16} height={16} onClick={props.onClick}>
            <Icons.ExportCsv/>
        </Button>
    );
};

export default BtnExportCsv;
