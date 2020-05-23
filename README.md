# Seattle Children’s Website Enhancement Design Specifications

<p><strong>Abstract:</strong> Seattle Children’s Hospital offers many resources that can make a significant difference in the quality of life for patient families. Ranging from food banks, to gas reimbursement, to unit food delivery, these critical resources are hidden within the information architecture of their website. Our mission is to centralize available resources so families can easily find resources relevant to their situations. The addition of a family resources tab allows families to quickly and easily discover, identify, and utilize the resources available.</p>

<p><strong>Team Members:</strong></p>
<ul>
  <li>Andy Luu: Developer</li>
  <li>Jonathan Lin: Developer</li>
  <li>Josephine Liu: UX Designer</li>
  <li>Yu-Won Youn: UX Researcher & Project Manager</li>
</ul>

<p><strong>Sponsor Info:</strong> Seattle Children’s is a non-profit hospital and research foundation dedicated to helping children get the childhoods that they deserve. They provide children and families with hope, care and cures to help every child live the healthiest and most fulfilling life possible.</p>

<h3><strong>Links</strong></h3>
<ul>
  <li><strong>GitHub Repo:</strong> https://github.com/aluu5675/capstone-project</li>

  <li><strong>React Prototype:</strong> https://aluu5675.github.io/capstone-project/#/</li> 

  <li><strong>Figma:</strong> https://www.figma.com/file/pNcAOo0dGkH5dMwzkPPSh0/Resource-Tab-Design?node-id=0%3A1</li>

  <li><strong>Content Inventory (Not Extensive):</strong> https://docs.google.com/spreadsheets/d/1VzsREIE6odM4DNglFpeQS8mcHGmuS09V844sfOOMMdc/edit?usp=sharing</li>
</ul>

<h3><strong>Key Features</strong></h3>

<a href="https://imgur.com/6b7cPp1"><img src="https://i.imgur.com/6b7cPp1.png" title="source: imgur.com" /></a>

<br>
<p><strong>New Tab: Family Resources</strong></p>

<p>The main edit we proposed is to add a new, separate global tab to the Seattle Children’s website. The website’s current global navigation contains tabs that mainly pertain to donors and those who want to make a visit. We had originally assumed that maybe there was another interface or portal for families of Seattle Children to use. However, upon further exploration of the site, as well as through interviews with family advisors, we confirmed that families do have the natural inclination to reference the site, just as we first suspected when we started our investigation of the Seattle Children’s Hospital website’s content. We also learned that the website actually already contains resources to direct parents to the resources they need, but they’re extremely inaccessible</p>

<p>Aside from a lack of concentrated resources, the search bar is fairly unhelpful to the families who are new to getting treatment for their child and their world has most likely turned upside down. The search bar mainly returns Wikipedia-like articles, where they explain concepts, such as ‘What is organic food?’. As a family who is already emotionally burdened by a great shift of priorities in having their child treated for their illness, the last thing parents want is to be repetitively punching in different words, hoping that it’ll be a keyword in finding what they actually need. Therefore, since all the global tabs on the Seattle Children’s website represent integral parts of the website and the services provided by Seattle Children’s, we created a global tab for family resources, so it’s both more visible to parents and congregates all the Seattle Children’s provided resources in one place. The name ‘family resources’ was suggested by family advisors, as to specify what type of resources would be featured in this tab.</p>

<p><strong>Category Buttons & Icons</strong></p>
<p>Another hurdle for families on the current Seattle Children’s website is the large, dense amount of text. The wall of text is already unfriendly for users, let alone families who are physically and emotionally exhausted. Therefore, the buttons at the top of the family resource homepage make it easy and intuitive for families to find what they need, since it’s divided into 6 main categories: housing, food assistance, transportation, technology, hygiene, mental health. The first three categories are meant to cover basic needs, but through interviews with family advisors, it was revealed that families also emphasized other categories aside from basic needs, such as mental health.</p>
<br>

<p>In the theme of reducing text and addressing language barriers, large icons are used to represent the categories in lieu of using text-based buttons. This also sets the user interface for the page to be more centered around the action of choosing a category, hence streamlining the user journey through visual encouragement to click on an icon.</p>

<a href="https://imgur.com/K6i0kN2"><img src="https://i.imgur.com/K6i0kN2.png" title="source: imgur.com" /></a>

<p><strong>Help Request Form</strong></p>
<p>As a center for resources, we anticipate that there will be questions from families that are not immediately answered with a simple webpage. Additionally, resources are still often difficult to navigate, once they’ve been discovered. Therefore, the design needs to include some sort of way for families to speak with a live representative or social worker who can guide patient families through the system, whether it be due to language barriers or due to particular circumstances. We had originally thought of creating a live chat bot, but upon further discussion with our project mentors, we were notified that Seattle Children’s doesn’t have the capacity to host a live chat bot dedicated to assisting families in finding resources. As we chatted more with Julie Povick, she suggested that her team would be able to handle incoming inquiries if they were given a larger time frame to respond to these help requests, and so the more balanced approach is the current help submission form that guarantees users a response from Seattle Children’s within 2 business days.</p>

<a href="https://imgur.com/Msu80ys"><img src="https://i.imgur.com/Msu80ys.png" title="source: imgur.com" /></a>

<p><strong>FAQ</strong></p>
<p>In anticipation for questions that may be commonly asked and to prevent the help request form feature from being flooded, and thereby reducing the effectiveness of the help request form feature, we added an FAQ section beneath the categories. The FAQs only have the questions shown by default and families need to click on the expand button in order to read the answer.  This design decision prevents overwhelming families with a wall of text, but still leaves room for Seattle Children’s to update with more robust information to answer questions if needed. Ideally, the FAQ would feature at least two other commonly used foreign languages of patient families, but that is not implemented at the moment.</p>

<a href="https://imgur.com/MUHFKjj"><img src="https://i.imgur.com/MUHFKjj.png" title="source: imgur.com" /></a>

<p><strong>Filters</strong></p>
<p>To help users find resources most relevant to them, we included filters within the sections. The key filter categories we identified are resource type, language, and in vs out patient resources. These were the categories family advisors noted as most relevant, but other filters to consider are regions (eg Seattle, PNW, USA) and subcategories for the resource types (eg. food banks, food stamp support, etc under food assistance).</p>

<a href="https://imgur.com/3nrrgk4"><img src="https://i.imgur.com/3nrrgk4.png" title="source: imgur.com" /></a>

<p><strong>Frequently Utilized Resources</strong></p>
<p>The key feature derived from the user interviews with the family advisors during our first iteration is the addition of a page that contains the top utilized or recommended resources for new families to Seattle Children’s Hospital. The family advisors noted that access to these resources are immensely helpful, especially during the first time their child receives treatment, since it’s extremely stressful emotionally and can be stressful financially as well. Furthermore, most patents that would be seeking for these resources are generally first time parents who may not know what they’re trying to look for. Even with the congregated resources, parents would still have to have something in mind to search for and therefore, this poses the problem of “you don’t know what you don’t know”. Notably, many family advisors disclosed that they found the gas reimbursement to be extremely helpful, but since it’s not a common service, many parents do not know about it and a few of the family advisors claimed that they wish they knew the gas reimbursement program existed when they first arrived at the Seattle Children’s Hospital.</p>

<p>Hence, this page would serve as a recommendation list to resources, shed light to any services that are super helpful to new parents but may not be obvious until they’ve been at the hospital for a while, and can potentially create a sense of solidarity for patient families.</p>

