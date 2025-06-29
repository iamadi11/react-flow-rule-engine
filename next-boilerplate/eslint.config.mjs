import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

const eslintConfig = [
    ...compat.extends(
        'next/core-web-vitals',
        'next/typescript',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:tailwindcss/recommended',
        'plugin:@tanstack/eslint-plugin-query/recommended'
    ),
    {
        rules: {
            'react/jsx-uses-react': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'tailwindcss/no-custom-classname': 'off',
            'tailwindcss/classnames-order': 'warn',
            'tailwindcss/no-contradicting-classname': 'error',
            'no-console': 'warn',
            'prettier/prettier': ['error', { endOfLine: 'auto' }],

            // Modern JavaScript rules
            'no-duplicate-imports': 'error',
            'prefer-const': 'error',
            'no-var': 'error',
            'no-magic-numbers': 'off',
            'no-shadow': 'warn',
            'prefer-arrow-callback': 'warn',
            'arrow-body-style': ['warn', 'as-needed'],
            'array-callback-return': 'warn',
            'no-new-func': 'error',
            'no-eval': 'error',
            'no-use-before-define': 'warn',
            'consistent-return': 'warn',

            // React-specific rules
            'react/jsx-key': 'error',
            'react/display-name': 'warn',
            'react/no-array-index-key': 'warn',

            // TypeScript-specific rules (if using TypeScript)
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/explicit-module-boundary-types': 'warn',
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

            // Import plugin rules
            'import/order': [
                'error',
                {
                    groups: [['builtin', 'external'], ['internal'], ['sibling', 'parent'], ['index']],
                    pathGroups: [
                        {
                            pattern: 'react',
                            group: 'external',
                            position: 'before',
                        },
                        {
                            pattern: 'react/**',
                            group: 'external',
                            position: 'before',
                        },
                    ],
                    pathGroupsExcludedImportTypes: ['react'],
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true,
                    },
                    'newlines-between': 'always',
                    warnOnUnassignedImports: false,
                },
            ],
            'import/no-unresolved': 'error',
            'import/newline-after-import': 'warn',
            'import/no-extraneous-dependencies': ['warn', { devDependencies: true }],

            // Tailwind-specific rules
            'tailwindcss/no-contradicting-classname': 'error',
            'tailwindcss/classnames-order': 'warn',
        },
    },
];

export default eslintConfig;
