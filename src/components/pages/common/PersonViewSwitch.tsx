import { useState } from 'react';
import {PersonViews} from './PersonViews';

type Props = {
    initView: PersonViews,
    children: Function
};

export default ({initView, children}: Props) => {
    const [view, setView] = useState(initView);
    const handleViewChange = (view: PersonViews) => setView(view);
    return children(view, handleViewChange);
}
