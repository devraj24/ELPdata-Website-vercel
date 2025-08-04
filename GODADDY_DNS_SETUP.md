# GoDaddy DNS Setup for elpdata.com → www.elpdata.com

## Step 1: Login to GoDaddy
1. Go to https://godaddy.com
2. Sign in to your account
3. Go to "My Products" → "DNS"
4. Click "Manage" next to elpdata.com

## Step 2: Configure DNS Records

### Delete Existing Records (if any)
- Delete any existing A records for @ (root domain)
- Delete any existing CNAME records for @ 

### Add New Records:

**Record 1: WWW Subdomain (Points to Replit)**
```
Type: CNAME
Name: www
Value: www.elpdata.com.replit.app
TTL: 1 Hour
```

**Record 2: Root Domain Redirect**
```
Type: A
Name: @
Value: 185.199.108.153
TTL: 1 Hour
```

**Record 3: Root Domain Backup**
```
Type: A  
Name: @
Value: 185.199.109.153
TTL: 1 Hour
```

**Record 4: Subdomain Redirect (Optional)**
```
Type: CNAME
Name: *
Value: www.elpdata.com
TTL: 1 Hour
```

## Step 3: Configure Forwarding
1. In GoDaddy DNS management, look for "Forwarding" section
2. Click "Add Forwarding"
3. Set up:
   - **Forward to**: https://www.elpdata.com
   - **Redirect type**: Permanent (301)
   - **Settings**: Forward only
   - **Update my nameservers**: Yes

## Step 4: SSL Configuration
1. Go to GoDaddy "SSL Certificates"
2. If you don't have SSL for elpdata.com:
   - Purchase SSL certificate
   - Add both domains: elpdata.com and www.elpdata.com
3. Install SSL certificate for both domains

## Step 5: Alternative - Use Cloudflare (Recommended)
If SSL issues persist, use Cloudflare:

1. **Add Site to Cloudflare**
   - Go to cloudflare.com
   - Add elpdata.com as new site
   - Choose Free plan

2. **Update Nameservers in GoDaddy**
   - Copy Cloudflare nameservers
   - In GoDaddy, change nameservers to Cloudflare's

3. **Configure Cloudflare DNS**
   ```
   Type: A
   Name: @
   Value: 76.76.19.19
   Proxy: Orange cloud (ON)
   
   Type: CNAME
   Name: www
   Value: www.elpdata.com
   Proxy: Orange cloud (ON)
   ```

4. **Set Page Rules**
   - Pattern: `elpdata.com/*`
   - Setting: Forwarding URL (301)
   - Destination: `https://www.elpdata.com/$1`

## Step 6: Verify Setup
Wait 24-48 hours for DNS propagation, then test:

```bash
curl -I https://elpdata.com
curl -I https://www.elpdata.com
```

Both should return successful responses.

## Expected Results:
- `https://elpdata.com` → redirects to `https://www.elpdata.com`
- `http://elpdata.com` → redirects to `https://www.elpdata.com`
- `https://www.elpdata.com` → works normally

## Troubleshooting:
- If still timeout: Contact GoDaddy support for SSL certificate
- If redirect doesn't work: Check forwarding configuration
- If DNS not updating: Clear browser cache and try incognito mode