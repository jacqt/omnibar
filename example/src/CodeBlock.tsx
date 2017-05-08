import * as React from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';

interface Props {
    style?: React.CSSProperties;
    children?: React.ReactText;
}

/**
 * Renders a code block via highlight.js
 *
 * @param {Props} props
 * @return {React.ReactChild}
 */
export default function CodeBlock(props: Props) {
    const { children, ...rest } = props;
    const text = children.toString().replace(/^(\s+|\s+$)/g, '');
    const highlighted = hljs.highlightAuto(text);
    return (
        <pre {...rest}>
            <code className="hljs js" dangerouslySetInnerHTML={{ __html: highlighted.value }} />
        </pre>
    );
}