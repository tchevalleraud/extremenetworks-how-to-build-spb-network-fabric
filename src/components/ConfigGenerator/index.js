import React from "react";
import clsx from 'clsx';
import styles from './styles.module.css';
import CodeBlock from '@theme/CodeBlock';

var role    = "a";
var site    = "00";
var id      = "00";

function roleChange(event){
    role = event.target.value;
}

function siteChange(event){
    site = event.target.value;
}

function nodeChange(event){
    id = event.target.value;
}

function updateConfig(){
    document.getElementsByClassName("token")[0].innerHTML = "" +
        "enable<br/>" +
        "config terminal<br/>" +
        "router isis<br/>" +
        "system-id 020"+ role +".0" + site + "0.00" + id + "<br/>" +
        "manual-area 49.0001<br/>" +
        "spbm 1<br/>" +
        "spbm 1 nick-name "+ role + "." + site + "." + id + "<br/>" +
        "spbm 1 b-vid 4051,4052 primary 4051<br/>" +
        "exit<br/>" +
        "vlan create 4051 type spbm-bvlan<br/>" +
        "vlan create 4052 type spbm-bvlan<br/>" +
        "router isis enable";
}

export default function ConfigGenerator() {

    return (
        <div>
            <p>
                <label>
                    <strong className="margin-right--sm">
                        Node role :
                    </strong>
                </label>
                <select onChange={roleChange} className={clsx(styles.input, 'margin-right--sm')}>
                    <option value="a">access</option>
                    <option value="b">backbone</option>
                    <option value="c">core</option>
                    <option value="d">datacenter</option>
                    <option value="e">edge</option>
                </select>
            </p>
            <p>
                <label>
                    <strong className="margin-right--sm">
                        Node site :
                    </strong>
                </label>
                <input type="text" onChange={siteChange} placeholder="00"/>
            </p>
            <p>
                <label>
                    <strong className="margin-right--sm">
                        Node ID :
                    </strong>
                </label>
                <input type="text" onChange={nodeChange} placeholder="00"/>
            </p>
            <p><button onClick={updateConfig}>Generate configuration</button></p>

            <CodeBlock language="jsx" title="Configuration">
                Please generate config
            </CodeBlock>
        </div>
    )

}