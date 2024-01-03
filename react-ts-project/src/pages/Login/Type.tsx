import { FormInstance, FormItemProps, InputProps } from 'antd';

export interface FormState {
    account: string;
    password: string;
    code: number;
    uuid: number;
    checked: boolean;
}

export interface ComponentSelectorProps {
    form: FormInstance;
    FormItem: React.ComponentType<FormItemProps>;
    Input: React.ComponentType<InputProps>;
}
