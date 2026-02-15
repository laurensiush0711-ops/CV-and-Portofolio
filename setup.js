
import { existsSync, writeFileSync, copyFileSync } from 'fs';
import { execSync } from 'child_process';
import path from 'path';

console.log('🚀 Starting Automated Portfolio Setup...');

// Safety check for Windows system folders
if (process.cwd().toLowerCase().includes('system32')) {
  console.error('❌ ERROR: You are running this in a system folder (System32).');
  console.error('Please move your project files to your "Documents" folder or a personal directory before running this.');
  process.exit(1);
}

try {
  // 1. Install Dependencies
  console.log('📦 Installing dependencies (this may take a minute)...');
  // Use npm.cmd on Windows if necessary, though execSync usually handles it
  const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  execSync(`${npmCmd} install`, { stdio: 'inherit' });

  // 2. Setup .env file
  const envPath = path.join(process.cwd(), '.env');
  const examplePath = path.join(process.cwd(), '.env.example');

  if (!existsSync(envPath)) {
    if (existsSync(examplePath)) {
      console.log('📄 Creating .env file from .env.example...');
      copyFileSync(examplePath, envPath);
      console.log('⚠️  ACTION REQUIRED: Please open the .env file and add your Gemini API Key.');
    } else {
      console.log('📄 Creating new .env file...');
      writeFileSync(envPath, 'VITE_API_KEY=your_key_here\n');
    }
  } else {
    console.log('✅ .env file already exists.');
  }

  console.log('\n✨ Setup Complete!');
  console.log('-------------------------------------------');
  console.log('To start your portfolio, run:');
  console.log('npm run dev');
  console.log('-------------------------------------------');

} catch (error) {
  console.error('❌ Setup failed:', error.message);
  process.exit(1);
}
