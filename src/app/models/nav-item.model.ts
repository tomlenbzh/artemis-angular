// Imports from Models
import { LanguageEnum } from './language.model';

// Navigation List Item
export interface NavItem {
  displayName: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
  children?: NavItem[];
  type: string;
  language?: LanguageEnum;
}
