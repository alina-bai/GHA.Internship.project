import React, { useState } from 'react';

/**
 * Утилита для объединения классов.
 * Принимает любое количество аргументов и объединяет их в одну строку.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Button Component
 *
 * Пример кнопки с вариантами (primary, secondary, destructive) и размерами (sm, md, lg).
 */
export const Button = React.forwardRef(
  (
    { variant = 'primary', size = 'md', className, children, ...props },
    ref
  ) => {
    const baseClasses =
      'inline-flex items-center justify-center font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2';
    const variantClasses = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
      secondary:
        'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
      destructive:
        'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    };
    const sizeClasses = {
      sm: 'px-2 py-1 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

/**
 * Input Component
 *
 * Простой инпут с базовой стилизацией.
 */
export const Input = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        'block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500',
        className
      )}
      {...props}
    />
  );
});
Input.displayName = 'Input';

/**
 * Card Component
 *
 * Карточка для отображения содержимого с тенью и отступами.
 */
export const Card = ({ className, children, ...props }) => {
  return (
    <div className={cn('bg-white shadow rounded-lg p-6', className)} {...props}>
      {children}
    </div>
  );
};

/**
 * Modal Component
 *
 * Модальное окно, которое появляется поверх контента.
 * Для простоты пример использует встроенную кнопку для закрытия.
 */
export const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full">
        <div className="flex justify-between items-center border-b p-4">
          <h3 className="text-lg font-medium">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
          >
            &times;
          </button>
        </div>
        <div className="p-4">{children}</div>
        <div className="flex justify-end border-t p-4">
          <Button variant="secondary" onClick={onClose}>
            Закрыть
          </Button>
        </div>
      </div>
    </div>
  );
};

/**
 * Navbar Component
 *
 * Простой навбар с заголовком, ссылками и кнопкой.
 */
export const Navbar = ({ title, links = [] }) => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">{title}</div>
        <div className="space-x-4">
          {links.map((link, index) => (
            <a key={index} href={link.href} className="hover:underline">
              {link.label}
            </a>
          ))}
        </div>
        <div>
          <Button variant="secondary">Войти</Button>
        </div>
      </div>
    </nav>
  );
};

/**
 * Alert Component
 *
 * Компонент уведомления с вариантами: info, success, warning, error.
 */
export const Alert = ({ variant = 'info', className, children }) => {
  const variantClasses = {
    info: 'bg-blue-100 text-blue-700',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    error: 'bg-red-100 text-red-700',
  };
  return (
    <div className={cn('p-4 rounded-md', variantClasses[variant], className)}>
      {children}
    </div>
  );
};