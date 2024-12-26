import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { GenerateAngularLibraryGeneratorSchema } from './schema';
import {libraryGenerator} from "@nx/angular/generators";

const TYPES = ['ui', 'data-access', 'feature', 'util'];

export async function generateAngularLibraryGenerator(
  tree: Tree,
  options: GenerateAngularLibraryGeneratorSchema
) {
  // const projectRoot = `libs/${options.name}`;
  // addProjectConfiguration(tree, options.name, {
  //   root: projectRoot,
  //   projectType: 'library',
  //   sourceRoot: `${projectRoot}/src`,
  //   targets: {},
  // });
  // generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  // await formatFiles(tree);

  if (options.type === 'all') {
    for (const type of TYPES) {
      await generateLibrary(tree, options, type);
    }
  } else {
    await generateLibrary(tree, options, options.type);
  }

  const path = `libs/${options.domain}/${options.type}/${options.name}/src`;

  tree.delete(`${path}/lib/${options.name}`);
  tree.write(`${path}/index.ts`, '');

}

async function generateLibrary(
  tree: Tree,
  options: GenerateAngularLibraryGeneratorSchema,
  type: string
) {
  await libraryGenerator(tree, {
    name: options.name,
    simpleName: true,
    standalone: true,
    buildable: true,
    prefix: `bt-libs-${type}`,
    style: 'scss',
    changeDetection: 'OnPush',
    directory: `libs/${options.domain}/${type}/${options.name}`,
    tags: `domain:${options.domain}, type:${type}`,
    importPath: `@bt-libs/${options.domain}/${type}/${options.name}`,
  });
}


export default generateAngularLibraryGenerator;
