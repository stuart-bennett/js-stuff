import { start as startPlain } from 'start/plainApp'
import { start as startRedux } from 'start/reduxApp'

const init = ($mount: HTMLElement) => {
    const $root = document.createElement('div');
    $root.classList.add("fillHeight");
    $mount.appendChild($root);
    return $root;
}

const $body: HTMLElement = (document.body: any);
const $root = init($body);

const useRedux: bool = true;
if (useRedux) {
    startRedux($root);
} else {
    startPlain($root);
}
