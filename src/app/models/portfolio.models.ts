import { components } from '@octokit/openapi-types';

export type Repository = components['schemas']['repository'];

export type RepositoryLanguages = Record<string, number>;
