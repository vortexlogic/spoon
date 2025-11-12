#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SpoonReorganizer {
    constructor() {
        this.colors = {
            green: '\x1b[32m',
            cyan: '\x1b[36m',
            red: '\x1b[31m',
            yellow: '\x1b[33m',
            reset: '\x1b[0m'
        };
    }

    log(message, color = 'green') {
        console.log(`${this.colors[color]}║ ${message}${this.colors.reset}`);
    }

    async transformToNexusStructure() {
        console.log(`${this.colors.green}╔════ SPOON NEXUS TRANSFORMATION ════╗${this.colors.reset}`);
        console.log(`${this.colors.green}║    REORGANIZING REALITY STRUCTURE   ║${this.colors.reset}`);
        console.log(`${this.colors.green}╚════════════════════════════════════╝${this.colors.reset}`);

        // 1. Create new structure
        await this.createNexusStructure();
        
        // 2. Move files intelligently
        await this.migrateExistingProjects();
        
        // 3. Clean up chaos
        await this.cleanupChaos();
        
        // 4. Create new entry points
        await this.createNexusEntryPoints();

        this.log('SPOON NEXUS TRANSFORMATION COMPLETE!', 'cyan');
        this.log('Reality structure optimized for cosmic harmony', 'green');
    }

    async createNexusStructure() {
        this.log('Creating cosmic nexus structure...');
        
        const nexusStructure = {
            // 🌌 CORE REALITY ENGINE
            'src/nexus-core': [
                'reality-generator.js',
                'cosmic-connector.js',
                'divine-symmetry.js'
            ],
            
            // 🎭 MATRIX OPERATORS
            'src/operators': [
                'mouse-reality.js',
                'tank-control.js', 
                'seraph-wisdom.js',
                'neo-ascension.js'
            ],
            
            // 🔮 AI CONSCIOUSNESS
            'src/ai-consciousness': [
                'gemini-oracle.js',
                'python-wisdom.js',
                'neural-symphony.js'
            ],
            
            // 🌐 REALITY TYPES
            'src/realities': [
                'web-realities/',
                'mobile-realities/',
                'desktop-realities/',
                'cli-realities/'
            ],
            
            // 📊 PROJECT MANAGEMENT
            'projects': [
                '_archives/chaos-era/',
                '_active-realities/',
                '_templates/nexus-blueprints/'
            ],
            
            // 🛠️ DEVELOPMENT
            'development': [
                'tests/cosmic-validation/',
                'docs/wisdom-library/',
                'examples/divine-patterns/'
            ],
            
            // 🐍 PYTHON INTEGRATION
            'python-matrix': [
                'ai-models/',
                'data-wisdom/',
                'neural-ascension/'
            ]
        };

        for (const [dir, files] of Object.entries(nexusStructure)) {
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
                this.log(`Created: ${dir}`, 'cyan');
            }
            
            files.forEach(file => {
                if (file.endsWith('/')) {
                    const subDir = path.join(dir, file);
                    if (!fs.existsSync(subDir)) {
                        fs.mkdirSync(subDir, { recursive: true });
                    }
                }
            });
        }
    }

    async migrateExistingProjects() {
        this.log('Migrating existing realities to cosmic structure...');
        
        const projectMappings = {
            // 🎯 ACTIVE PROJECTS → _active-realities/
            'my-matrix-app': 'projects/_active-realities/matrix-app/',
            'my-react-dashboard': 'projects/_active-realities/react-dashboard/',
            'my-oracle-site': 'projects/_active-realities/oracle-site/',
            'portfolio-website': 'projects/_active-realities/portfolio/',
            'my-vue-app': 'projects/_active-realities/vue-app/',
            'my-website': 'projects/_active-realities/website/',
            
            // 🧪 TEST PROJECTS → _archives/chaos-era/
            'test-app-1': 'projects/_archives/chaos-era/tests/app-1/',
            'test-app-2': 'projects/_archives/chaos-era/tests/app-2/',
            'test-matrix-app': 'projects/_archives/chaos-era/tests/matrix-app/',
            'test-v12-app': 'projects/_archives/chaos-era/tests/v12-app/',
            'my-second-abnormal-test': 'projects/_archives/chaos-era/tests/abnormal/',
            
            // 🎨 CREATIVE PROJECTS → _active-realities/
            'create-a-portfolio-website-with-react-and-animations': 'projects/_active-realities/creative-portfolio/',
            'landing-page': 'projects/_active-realities/landing-page/',
            'matrix-training-app': 'projects/_active-realities/training-app/'
        };

        let migrated = 0;
        for (const [oldPath, newPath] of Object.entries(projectMappings)) {
            if (fs.existsSync(oldPath)) {
                // Create new directory
                if (!fs.existsSync(newPath)) {
                    fs.mkdirSync(path.dirname(newPath), { recursive: true });
                }
                
                // Move project
                execSync(`mv "${oldPath}" "${newPath}"`);
                this.log(`Migrated: ${oldPath} → ${newPath}`, 'green');
                migrated++;
            }
        }
        
        this.log(`Migrated ${migrated} realities to cosmic order`, 'cyan');
    }

    async cleanupChaos() {
        this.log('Cleansing chaotic energy patterns...');
        
        const chaosPatterns = [
            'file1.js', 'file2.js',
            'response.js', 'response.json',
            'debug-upgrade.js', 'debug-upgrade-path.js',
            'manual-upgrade-test.js', 'load-analyze.js',
            'test-analyze.js', 'system-verification.js',
            'spoon-analyze.js', 'o-spoon.js',
            'spoon.js.backup',
            '"server.js', "'application",
            '```js', '```json', '"src', '"Node.js', '"scripts',
            'server.js (Example Node.js server - adjust according to your actual server setup)',
            'my-site', 'oracle-site', 'app', 'public', 'spoon'
        ];

        let cleansed = 0;
        chaosPatterns.forEach(pattern => {
            try {
                if (fs.existsSync(pattern)) {
                    if (fs.statSync(pattern).isDirectory()) {
                        execSync(`rm -rf "${pattern}"`);
                    } else {
                        fs.unlinkSync(pattern);
                    }
                    this.log(`Cleansed: ${pattern}`, 'yellow');
                    cleansed++;
                }
            } catch (error) {
                // Skip if can't delete
            }
        });

        this.log(`Cleansed ${cleansed} chaotic patterns`, 'cyan');
    }

    async createNexusEntryPoints() {
        this.log('Creating cosmic entry points...');
        
        // Main nexus entry point
        const nexusJS = `
#!/usr/bin/env node

const { SpoonNexus } = require('./src/nexus-core/reality-generator.js');
const { MouseReality } = require('./src/operators/mouse-reality.js');
const { TankControl } = require('./src/operators/tank-control.js');
const { SeraphWisdom } = require('./src/operators/seraph-wisdom.js');

class SpoonOmegaNexus {
    constructor() {
        this.nexus = new SpoonNexus();
        this.mouse = new MouseReality();
        this.tank = new TankControl();
        this.seraph = new SeraphWisdom();
    }

    async initiateRealityCreation(description) {
        console.log('🌌 SPOON NEXUS ACTIVATED - COSMIC CREATION INITIATED');
        
        // Mouse creates the reality structure
        const realityBlueprint = await this.mouse.generateReality(description);
        
        // Tank operates and builds
        const operationalReality = await this.tank.buildReality(realityBlueprint);
        
        // Seraph protects and validates
        const securedReality = await this.seraph.protectReality(operationalReality);
        
        return securedReality;
    }
}

module.exports = SpoonOmegaNexus;

// CLI entry point
if (require.main === module) {
    const nexus = new SpoonOmegaNexus();
    nexus.initiateRealityCreation(process.argv[2] || 'new cosmic reality');
}
`.trim();

        fs.writeFileSync('spoon-nexus.js', nexusJS);
        fs.chmodSync('spoon-nexus.js', '755');
        
        // Package.json update
        const packageJson = {
            name: "spoon-omega-nexus",
            version: "13.0.0",
            description: "Cosmic reality generation engine - Mouse/Tank/Seraph Nexus",
            main: "spoon-nexus.js",
            bin: {
                "spoon-nexus": "./spoon-nexus.js",
                "spoon": "./spoon-nexus.js"
            },
            scripts: {
                "start": "node spoon-nexus.js",
                "dev": "node spoon-nexus.js --development",
                "cosmic": "node spoon-nexus.js --neo --quantum"
            }
        };
        
        fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
        
        this.log('Created spoon-nexus.js - Cosmic entry point', 'green');
        this.log('Updated package.json for nexus operations', 'cyan');
    }
}

// Execute transformation
if (require.main === module) {
    const reorganizer = new SpoonReorganizer();
    reorganizer.transformToNexusStructure()
        .then(() => {
            console.log(`${reorganizer.colors.green}╔════ TRANSFORMATION COMPLETE ═════╗${reorganizer.colors.reset}`);
            console.log(`${reorganizer.colors.green}║   NEW COMMANDS AVAILABLE:        ║${reorganizer.colors.reset}`);
            console.log(`${reorganizer.colors.green}║                                  ║${reorganizer.colors.reset}`);
            console.log(`${reorganizer.colors.cyan} ║   spoon-nexus create reality     ║${reorganizer.colors.reset}`);
            console.log(`${reorganizer.colors.cyan} ║   npm run cosmic                 ║${reorganizer.colors.reset}`);
            console.log(`${reorganizer.colors.cyan} ║   node spoon-nexus.js --neo      ║${reorganizer.colors.reset}`);
            console.log(`${reorganizer.colors.green}╚══════════════════════════════════╝${reorganizer.colors.reset}`);
        })
        .catch(error => {
            console.error(`${reorganizer.colors.red}Transformation failed: ${error}${reorganizer.colors.reset}`);
        });
}

module.exports = SpoonReorganizer;
