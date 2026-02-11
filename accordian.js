function renderAccordionFromData(data, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  data.forEach(item => {
    // Wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'accordion-item';

    // Header
    const header = document.createElement('div');
    header.className = 'accordion-header';
    header.textContent = item.title;

    // Content container
    const content = document.createElement('div');
    content.className = 'accordion-content';

    // Build blocks
    item.blocks.forEach(block => {
      const section = document.createElement('div');
      section.className = 'accordion-section';

      // Heading
      if (block.heading) {
        const h3 = document.createElement('h3');
        h3.textContent = block.heading;
        section.appendChild(h3);
      }

      // Block types
      switch (block.type) {
        case 'text':
          const p = document.createElement('p');
          p.textContent = block.content;
          section.appendChild(p);
          break;

        case 'list':
          const ul = document.createElement('ul');
          block.items.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${item.label}:</strong> ${item.text}`;
            ul.appendChild(li);
          });
          section.appendChild(ul);
          break;

        case 'link':
          const link = document.createElement('a');
          link.href = block.url;
          link.target = '_blank';
          link.textContent = block.label;
          section.appendChild(link);
          break;

        case 'html':
          const htmlBlock = document.createElement('div');
          htmlBlock.innerHTML = block.content;
          section.appendChild(htmlBlock);
          break;
      }

      content.appendChild(section);
    });

    // Assemble
    wrapper.appendChild(header);
    wrapper.appendChild(content);
    container.appendChild(wrapper);
  });

  // Toggle behaviour
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      header.nextElementSibling.classList.toggle('open');
    });
  });
}