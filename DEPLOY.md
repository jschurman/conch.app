# 🚀 Deployment Guide for Conched Website

## ✅ Pre-Deployment Checklist

All done! ✓
- [x] Next.js project built successfully
- [x] All dependencies installed
- [x] Assets optimized and in place
- [x] Vercel CLI installed
- [x] Domain `conched.app` purchased

## 📦 Deploy to Vercel

### Step 1: Login to Vercel

Run this command and follow the prompts:

```bash
vercel login
```

Enter your email: **joe.schurman@gmail.com**

Check your email for the verification link and click it.

### Step 2: Deploy the Site

From the project directory, run:

```bash
cd /Users/joeschurman/apps/conch-site
vercel deploy --prod
```

The CLI will ask you a few questions:

1. **Set up and deploy?** → Yes
2. **Which scope?** → Select your account (joe.schurman@gmail.com)
3. **Link to existing project?** → No
4. **What's your project's name?** → `conched` (or press Enter to use "conch-site")
5. **In which directory is your code located?** → `./ (press Enter)`

Vercel will then:
- Upload your code
- Build the site
- Deploy to a URL like `conched.vercel.app`

### Step 3: Add Your Custom Domain

After deployment, you'll get a URL. Now add your custom domain:

#### Option A: Via CLI
```bash
vercel domains add conched.app
```

#### Option B: Via Dashboard (Recommended)
1. Go to https://vercel.com/dashboard
2. Click on your `conched` project
3. Go to **Settings** → **Domains**
4. Add domain: `conched.app`
5. Follow the DNS instructions

### Step 4: Configure DNS

You'll need to add these DNS records to your domain registrar:

**For Apex Domain (conched.app):**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21`

**For WWW (www.conched.app):**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

**SSL Certificate:** Vercel automatically provisions SSL certificates for your domain. This may take 5-10 minutes.

## 🔄 Updating Your Site

After making changes:

```bash
cd /Users/joeschurman/apps/conch-site
npm run build
vercel deploy --prod
```

## ✅ Verify Deployment

After deployment, check:

1. **Site is live:** https://conched.app
2. **SSL works:** Padlock icon in browser
3. **Mobile responsive:** Test on phone
4. **All images load:** Check theme store
5. **Forms work:** Test email links
6. **Performance:** Run Lighthouse audit (should be 90+)

## 🐛 Troubleshooting

**Build fails:**
```bash
npm run build
# Fix any errors shown
```

**Images not loading:**
- Check that `/public/app_media_assets/` exists
- Verify image paths in components

**Domain not working:**
- Wait 10-15 minutes for DNS propagation
- Verify DNS records in your registrar
- Check Vercel dashboard for domain status

**CLI authentication issues:**
```bash
vercel logout
vercel login
```

## 📊 Post-Deployment

### Enable Analytics (Optional)

In Vercel dashboard:
1. Go to your project
2. Click **Analytics**
3. Enable Vercel Analytics (free tier available)

### Set Environment Variables (If needed later)

```bash
vercel env add NEXT_PUBLIC_APP_STORE_URL
```

## 🎉 Your Site is Live!

Once deployed, your website will be available at:
- **Primary:** https://conched.app
- **Vercel:** https://conched.vercel.app (or similar)

Share it with the world! 🐚
