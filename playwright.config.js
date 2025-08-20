// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config=({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  timeout:120000,
  expect:{
    timeout:10000,
  },
  reporter:'html',
  
  use: {
 
    browserName:'chromium',
    
  },
  
});
module.exports=config

