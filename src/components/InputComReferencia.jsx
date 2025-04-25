import React, { forwardRef, useImperativeHandle, useRef } from 'react';

const InputComReferencia = forwardRef(({
    type = 'text',
    name,
    onChange,
    placeholder = '',
    label = '',
    disabled = false,
    className = '',
    inputClassName = '',
    labelClassName = '',
    errorClassName = '',
    ...props
}, ref) => {  // O ref agora vem como segundo parâmetro do forwardRef

    const referenciInterna = useRef();

    // Combinando a ref externa com a interna
    useImperativeHandle(ref, () => ({
        ...novasFuncionalidades(),
        
        // // Podemos também expor o elemento DOM diretamente se necessário
        // element: referenciInterna.current
    }));
    
    // No componente filho:
    function novasFuncionalidades() {
        return {
            apagar: function () {
                referenciInterna.current.value = referenciInterna.current.value.slice(0, -1);

            },
            padrao: function () {
                referenciInterna.current.value = "Padrão";

            }
        }
    }

    return (
        <div className={`mb-4 ${className}`}>
            {label && (
                <label
                    htmlFor={name}
                    className={`block text-sm font-medium mb-1 ${labelClassName}`}
                >
                    {label}
                </label>
            )}
            <input
                ref={referenciInterna}  // Usamos a ref interna aqui
                type={type}
                id={name}
                name={name}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                className={`w-full px-3 py-2 border text-white rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${inputClassName}`}
                {...props}
            />
        </div>
    );
});

export default InputComReferencia;